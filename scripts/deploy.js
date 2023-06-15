const hre = require("hardhat");

async function main() {
  const DataMarketplace = await hre.ethers.getContractFactory("DataMarketplace");
  const dataMarketplace = await DataMarketplace.deploy();

  await dataMarketplace.deployed();

  // //TRANSFER FUNDS
  // const TransferFunds = await hre.ethers.getContractFactory("TransferFunds");
  // const transferFunds = await TransferFunds.deploy();

  // await transferFunds.deployed();

  console.log(` deployed contract Address ${dataMarketplace.address}`);
  // console.log(` deployed contract Address ${transferFunds.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
