require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/N3a_V4G0EW1qq8mHDracezcus9H8id44",
      accounts: ["123cd4a204a0367fe28ac2b578879bc2442d5e2557fee17474c6ee0ce2c57396"],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
