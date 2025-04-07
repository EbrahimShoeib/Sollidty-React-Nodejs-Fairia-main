const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TenderApp", function () {
  let tenderApp;
  let signer;

  beforeEach(async () => {
    const TenderApp = await ethers.getContractFactory("TenderApp");
    tenderApp = await TenderApp.deploy();
    await tenderApp.deployed();
    [signer] = await ethers.getSigners();
  });

  describe("createTender", function () {

    it("Should emit Announce event", async function () {
      await expect(
          tenderApp.createTender(
              "From",
              "Title",
              "Description",
              100,            // bidBond
              50,             // applicationFee
              100,            // prequalificationDeadline
              200,            // bidSubmissionDeadline
              300,            // contractSignDeadline
              400,            // estimatedProjectCost
              "Keyword",
              "admin@example.com"  // officialContactEmail
          )
      ).to.emit(tenderApp, "Announce");
    });

    it("Should increment id by 1", async function () {
      for (let i = 0; i < 10; ++i) {
        await tenderApp.createTender(
            "From",
            "Title",
            "Description",
            100,
            50,
            100,
            200,
            300,
            400,
            "Keyword",
            "admin@example.com"
        );
      }

      const tenders = await tenderApp.getTenders();

      for (let i = 0; i < tenders.length; ++i) {
        expect(tenders[i].id).to.equal(i);
        console.log(parseInt(tenders[i].id._hex));
      }
    });

    it("Should create a new Tender with new fields", async function () {
      await tenderApp.createTender(
          "From",
          "Title",
          "Description",
          100,
          50,
          100,
          200,
          300,
          400,
          "Keyword",
          "admin@example.com"
      );
      const tenders = await tenderApp.getTenders();

      // Access the latest tender (index 0)
      const latestTender = tenders[0];

      expect(latestTender.auther).to.equal(await tenderApp.signer.getAddress());
      expect(latestTender.from).to.equal("From");
      expect(latestTender.title).to.equal("Title");
      expect(latestTender.description).to.equal("Description");
      expect(latestTender.keyword).to.equal("Keyword");
      expect(latestTender.bidBond).to.equal(100);
      expect(latestTender.applicationFee).to.equal(50);
      expect(latestTender.prequalificationDeadline).to.equal(100);
      expect(latestTender.bidSubmissionDeadline).to.equal(200);
      expect(latestTender.contractSignDeadline).to.equal(300);
      expect(latestTender.estimatedProjectCost).to.equal(400);
      expect(latestTender.officialContactEmail).to.equal("admin@example.com");
    });
  });

  describe("getTenders", function () {
    it("Should return the latest 10 tenders", async function () {
      for (let i = 1; i <= 15; i++) {
        await tenderApp.createTender(
            ethers.utils.formatBytes32String(`From ${i}`),
            ethers.utils.formatBytes32String(`Title ${i}`),
            ethers.utils.formatBytes32String(`Description ${i}`),
            100,
            50,
            100,
            200,
            300,
            400,
            ethers.utils.formatBytes32String(`Keyword ${i}`),
            "admin@example.com"
        );
      }

      const latestTenders = await tenderApp.getTenders();
      expect(latestTenders.length).to.equal(10);

      for (let i = 0; i < latestTenders.length; i++) {
        const tender = latestTenders[i];
        expect(ethers.utils.parseBytes32String(tender.from)).to.equal(`From ${6 + i}`);
        expect(tender.title).to.equal(ethers.utils.formatBytes32String(`Title ${6 + i}`));
        expect(tender.description).to.equal(ethers.utils.formatBytes32String(`Description ${6 + i}`));
        expect(tender.bidBond).to.equal(100);
        expect(tender.applicationFee).to.equal(50);
        expect(tender.prequalificationDeadline).to.equal(100);
        expect(tender.bidSubmissionDeadline).to.equal(200);
        expect(tender.contractSignDeadline).to.equal(300);
        expect(tender.estimatedProjectCost).to.equal(400);
        expect(tender.keyword).to.equal(ethers.utils.formatBytes32String(`Keyword ${6 + i}`));
        expect(tender.officialContactEmail).to.equal("admin@example.com");
      }
    });

    it("Should revert if there are no tenders available", async function () {
      await expect(tenderApp.getTenders()).to.be.revertedWith("No tenders available");
    });
  });

  describe("searchTenders", function () {
    it("Should return matching tenders", async function () {
      await tenderApp.createTender("From1", "Title1", "Description1", 100, 50, 100, 200, 300, 400, "Keyword1", "admin@example.com");
      await tenderApp.createTender("From2", "Another Title", "Another Description", 100, 50, 100, 150, 250, 350, "Keyword2", "admin@example.com");
      await tenderApp.createTender("From3", "Third Title", "Third Description", 100, 50, 100, 200, 300, 400, "Keyword3", "admin@example.com");

      const matchingTenders = await tenderApp.searchTenders("Another");
      expect(matchingTenders.length).to.equal(1);
      const tender = matchingTenders[0];

      expect(tender.from).to.equal("From2");
      expect(tender.title).to.equal("Another Title");
      expect(tender.description).to.equal("Another Description");
      expect(tender.bidBond).to.equal(100);
      expect(tender.prequalificationDeadline).to.equal(150);
      expect(tender.bidSubmissionDeadline).to.equal(250);
      expect(tender.contractSignDeadline).to.equal(350);
      expect(tender.estimatedProjectCost).to.equal(450);
      expect(tender.keyword).to.equal("Keyword2");
      expect(tender.officialContactEmail).to.equal("admin@example.com");
    });

    it("Should revert if the search query is empty", async function () {
      await expect(tenderApp.searchTenders("")).to.be.revertedWith("Empty search query");
    });

    it("Should return an empty array if no matching tenders found", async function () {
      await tenderApp.createTender("From1", "Title1", "Description1", 100, 50, 100, 200, 300, 400, "Keyword1", "admin@example.com");

      const matchingTenders = await tenderApp.searchTenders("Nonexistent");
      expect(matchingTenders.length).to.equal(0);
    });
  });

  describe("getTenderById", function () {
    it("Should return a tender by its ID", async function () {
      await tenderApp.createTender("From", "Title", "Description", 100, 50, 100, 200, 300, 400, "Keyword", "admin@example.com");
      await tenderApp.createTender("Another From", "Another Title", "Another Description", 100, 50, 100, 150, 250, 350, "Another Keyword", "admin@example.com");

      const tender1 = await tenderApp.getTenderById(0);
      expect(tender1.id).to.equal(0);
      expect(tender1.from).to.equal("From");
      expect(tender1.title).to.equal("Title");

      const tender2 = await tenderApp.getTenderById(1);
      expect(tender2.id).to.equal(1);
      expect(tender2.from).to.equal("Another From");
      expect(tender2.title).to.equal("Another Title");
    });

    it("Should revert if the tender ID is invalid", async function () {
      await expect(tenderApp.getTenderById(100)).to.be.revertedWith("Invalid tender ID");
    });
  });

  describe("applyToTender", function () {
    it("Should allow applicants to submit applications", async function () {
      await tenderApp.createTender("From", "Title", "Description", 100, 50, 100, 200, 300, 400, "Keyword", "admin@example.com");
      const tender = await tenderApp.getTenders();
      [auther, applicant1] = await ethers.getSigners();
      await tenderApp.connect(applicant1).applyToTender(
          tender[0].id,
          "Applicant Form",
          "Application Title",
          "Application Description",
          { value: 100 }
      );
      const applicants = await tenderApp.getApplicantsByTender(0);
      expect(applicants.length).to.equal(1);
      expect(applicants[0].applicant).to.equal(await applicant1.getAddress());
      expect(applicants[0].form).to.equal("Applicant Form");
      expect(applicants[0].title).to.equal("Application Title");
      expect(applicants[0].description).to.equal("Application Description");
    });

    it("Should revert if the tender index is invalid", async function () {
      await expect(tenderApp.applyToTender(100, "Form", "Title", "Description", { value: 10 })).to.be.revertedWith("Invalid tender index");
    });

    it("Should revert if the applicant tries to apply to their own tender", async function () {
      await tenderApp.createTender("From", "Title", "Description", 100, 50, 100, 200, 300, 400, "Keyword", "admin@example.com");
      const tender = await tenderApp.getTenders();
      await expect(tenderApp.applyToTender(tender[0].id, "Form", "Title", "Description", { value: 100 })).to.be.revertedWith("Applicants cannot be the tender author");
    });

    it("Should revert if the bid bond amount is invalid", async function () {
      [auther, applicant1] = await ethers.getSigners();
      await tenderApp.createTender("From", "Title", "Description", 100, 50, 100, 200, 300, 400, "Keyword", "admin@example.com");
      const tender = await tenderApp.getTenders();
      await expect(tenderApp.connect(applicant1).applyToTender(tender[0].id, "Form", "Title", "Description", { value: 50 })).to.be.revertedWith("Invalid bid bond amount");
    });
  });

  describe("getTendersByAuther", function () {
    it("should return the tenders of the auther", async function () {
      const [author1, author2] = await ethers.getSigners();
      await tenderApp.connect(author1).createTender("From1", "Title1", "Description1", 100, 50, 200, 300, 400, "Keyword1", "admin@example.com");
      await tenderApp.connect(author1).createTender("From2", "Title2", "Description2", 200, 50, 300, 400, 500, "Keyword2", "admin@example.com");

      await tenderApp.connect(author2).createTender("From3", "Title3", "Description3", 300, 50, 400, 500, 600, "Keyword3", "admin@example.com");
      await tenderApp.connect(author2).createTender("From4", "Title4", "Description4", 300, 50, 400, 500, 600, "Keyword3", "admin@example.com");

      const auther1Tenders = await tenderApp.connect(author1).getTendersByAuthor();
      const auther2Tenders = await tenderApp.connect(author2).getTendersByAuthor();

      expect(auther1Tenders[0].from).to.equal("From1");
      expect(auther1Tenders[0].title).to.equal("Title1");
      expect(auther1Tenders[0].description).to.equal("Description1");

      expect(auther1Tenders[1].from).to.equal("From2");
      expect(auther1Tenders[1].title).to.equal("Title2");
      expect(auther1Tenders[1].description).to.equal("Description2");

      expect(auther2Tenders[0].from).to.equal("From3");
      expect(auther2Tenders[0].title).to.equal("Title3");
      expect(auther2Tenders[0].description).to.equal("Description3");

      expect(auther2Tenders[1].from).to.equal("From4");
      expect(auther2Tenders[1].title).to.equal("Title4");
      expect(auther2Tenders[1].description).to.equal("Description4");
    });
  });

  describe("getTendersByApplicant", function () {
    it("should return the tenders that the auther applied to", async function () {
      const [author, author1, author2] = await ethers.getSigners();
      await tenderApp.connect(author).createTender("From1", "Title1", "Description1", 100, 50, 200, 300, 400, "Keyword1", "admin@example.com");
      await tenderApp.connect(author).createTender("From2", "Title2", "Description2", 200, 50, 300, 400, 500, "Keyword2", "admin@example.com");

      await tenderApp.connect(author1).applyToTender((await tenderApp.getTenders())[0].id, "Applicant Form", "Application Title", "Application Description", { value: 100 });
      await tenderApp.connect(author1).applyToTender((await tenderApp.getTenders())[1].id, "Applicant Form", "Application Title", "Application Description", { value: 200 });

      const auther1Tenders = await tenderApp.connect(author1).getTendersByApplicant();

      expect(auther1Tenders.length).to.equal(2);

      expect(auther1Tenders[0].from).to.equal("From1");
      expect(auther1Tenders[0].title).to.equal("Title1");
      expect(auther1Tenders[0].description).to.equal("Description1");

      expect(auther1Tenders[1].from).to.equal("From2");
      expect(auther1Tenders[1].title).to.equal("Title2");
      expect(auther1Tenders[1].description).to.equal("Description2");
    });
  });
});
