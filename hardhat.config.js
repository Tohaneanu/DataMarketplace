require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "YOUR RPC URL";
const NEXT_PUBLIC_PRIVATE_KEY = "PRIVATE KEY";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  //defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/e3NH_QkXyJkYyopcMxXyv7cIfogw3VQL",
      accounts: [`0x${"288048dbf9402eaecd0832e8b7364fe19d01a352bcfebed08c6f50dec30ddbbb"}`],
    },
  },
};
