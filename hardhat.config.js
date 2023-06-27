require("@nomicfoundation/hardhat-toolbox");

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
