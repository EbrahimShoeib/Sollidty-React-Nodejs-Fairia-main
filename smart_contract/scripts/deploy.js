
const main = async () => {
  const TenderApp = await hre.ethers.getContractFactory("TenderApp")
  const tenderApp = await TenderApp.deploy()

  console.log("Tender app is deployed to: ",tenderApp.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
