require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        // viaIR: true, // Enable the IR-based pipeline
      },
    },
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/mVPgNjOgOhwt5bFLjeF6-lj1LBj_3Gt5",
      accounts: [
        "9064ed8a27a575edca094d746cdf6da6c8bd90b4a68e3042c47b901ef5373d80"
      ],
    },
  },
};
