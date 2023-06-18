const hre = require("hardhat");

async function main() {
  const DataMarketplace = await hre.ethers.getContractFactory("DataMarketplace");
  const dataMarketplace = await DataMarketplace.deploy();

  await dataMarketplace.deployed();

  console.log(` deployed contract Address ${dataMarketplace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
