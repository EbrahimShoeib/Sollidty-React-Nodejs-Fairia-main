import React, { useContext, useState } from "react"; // eslint-disable-next-line no-unused-vars
import { TenderAppContext } from "../context/TenderAppContext";
import { ethers } from "ethers";

function CreateTender() {
  const [From, setFrom] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [ApplicationFee, setApplicationFee] = useState("");
  const [BidBond, setBidBond] = useState("");
  const [OfficialContactEmail, setOfficialContactEmail] = useState(""); // Fixed naming issue
  const [prequalification, setPrequalification] = useState("");
  const [BidSubmission, setBidSubmission] = useState("");
  const [ContractSign, setContractSign] = useState("");
  const [EstimatedProject, setEstimatedProject] = useState("");
  const [KeyWord, setKeyWord] = useState("");

  const { createTender } = useContext(TenderAppContext);

  async function onSubmit() {
    try {
      // Convert numeric values
      const bidBond = ethers.utils.parseUnits(BidBond || "0", "wei");
      const applicationFee = ethers.utils.parseUnits(ApplicationFee || "0", "wei");
      const prequalificationDeadline = new Date(prequalification).getTime();
      const bidSubmissionDeadline = new Date(BidSubmission).getTime();
      const contractSignDeadline = new Date(ContractSign).getTime();
      const estimatedProjectCost = ethers.utils.parseUnits(EstimatedProject || "0", "wei");

      // Call smart contract function
      await createTender(
          From,
          Title,
          Description,
          bidBond,
          applicationFee,
          prequalificationDeadline,
          bidSubmissionDeadline,
          contractSignDeadline,
          estimatedProjectCost,
          KeyWord,
          OfficialContactEmail
      );

      alert("Tender created successfully!");
    } catch (error) {
      alert(error.reason || "An error occurred. Please try again later.");
    }
  }

  return (
      <React.Fragment>
        <div
            onSubmit={(e) => e.preventDefault()}
            className="text-slate-950 bg-white text-sky-400 flex min-h-screen w-80% flex-col items-center pt-16 sm:justify-center sm:pt-0"
        >
          <a href="#">
            <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
              <div style={{ fontSize: "80px" }}>
                <p className="bg-slat-950 font-semibold flex justify-center py-20 text-black">
                  Create<span className="text-sky-400 px-3">Tender</span>
                </p>
              </div>
            </div>
          </a>

          <div className="relative mt-12 pb-20 w-full max-w-4xl sm:mt-10 border rounded-lg shadow-md">
            <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent bg-cyan-50" />
            <div className="p-6 pt-0">
              <form action="">
                {/* Input Fields */}
                <InputField label="From" value={From} onChange={setFrom} placeholder="The Tendering Entity" />
                <InputField label="Title" value={Title} onChange={setTitle} placeholder="Enter Tender Title" />
                <InputField label="Description" value={Description} onChange={setDescription} placeholder="Enter Tender Description" />
                <InputField label="Application Fee" value={ApplicationFee} onChange={setApplicationFee} placeholder="Enter Application Fee" />
                <InputField label="Bid Bond (E$)" value={BidBond} onChange={setBidBond} placeholder="Enter Bid Bond" />
                <InputField label="Prequalification Deadline" value={prequalification} onChange={setPrequalification} type="date" />
                <InputField label="Bid Submission Deadline" value={BidSubmission} onChange={setBidSubmission} type="date" />
                <InputField label="Contract Sign Deadline" value={ContractSign} onChange={setContractSign} type="date" />
                <InputField label="Estimated Project Cost" value={EstimatedProject} onChange={setEstimatedProject} placeholder="Enter Estimated Cost" />
                <InputField label="Keyword" value={KeyWord} onChange={setKeyWord} placeholder="Keyword to find Tender" />
                <InputField label="Official Contact Email" value={OfficialContactEmail} onChange={setOfficialContactEmail} placeholder="Enter Contact Email" />

                {/* Submit Button */}
                <div className="mt-4 pt-10 flex items-center justify-around gap-x-2 animate-pulse">
                  <button
                      onClick={() => onSubmit()}
                      className="bg-ter text-black inline-flex items-center justify-center rounded-3xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                  >
                    Create A New Tender
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
}

// Reusable Input Component
const InputField = ({ label, value, onChange, placeholder, type = "text" }) => (
    <div className="mt-4">
      <div className="group relative rounded-lg border-b focus-within:border-sky-500 px-3 pb-1.5 pt-2.5 duration-200">
        <div className="flex justify-between">
          <label className="text-xs font-medium text-muted-foreground group-focus-within:text-sky-500">{label}</label>
        </div>
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={type}
            placeholder={placeholder}
            className="w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
            style={{ backgroundColor: "#0000" }}
        />
      </div>
    </div>
);

export default CreateTender;
