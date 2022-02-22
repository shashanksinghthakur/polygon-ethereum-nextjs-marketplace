require("@nomiclabs/hardhat-waffle");
const privateKey = "cefe26a3e7511568b2fa2e4bf03c6b498c8cd40dcbf383ca03f9671ff33d53ad";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },/*
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }*/
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

