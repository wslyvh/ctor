require("dotenv").config();
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*" // Match any network id
		},
		ropsten: {
			provider: function() {
				return new HDWalletProvider(process.env.DEPLOYER_MNENOMIC, process.env.INFURA_ROPSTEN);
			},
			network_id: "3"
		}
	}
};
