module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777", // Match any network id
      from: "0x84aAA6D923e7dE9b0c0be3718abAa0CDd3031c5a", // default address to use for any transaction Truffle makes during migrations
    },
  },
  compilers: {
    solc: {
      version: "^0.8.13",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
