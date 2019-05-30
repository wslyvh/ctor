#!/usr/bin/env node
var open = require("open");
var prog = require("commander");
var pkg = require("../package.json");

// Defaults
process.env.NODE_ENV = "production";

prog
	.version(`${pkg.name} v${pkg.version}`, "-v, --version")
	.option("-p, --port [port]", "port to serve from (e.g; 5500)")
	.option("-b, --build_dir [build_dir]", "truffle contracts build directory (e.g; ./builds/contracts/")
	.option("-h, --host [host]", "rpc provider host (e.g; http://localhost:7545/)")
	.option("-i, --networkId [networkId]", "the network id (e.g; 5777)")
	.parse(process.argv);

// Args
process.env.PORT = prog.port || 5500;
process.env.CONTRACT_BUILD_DIR = prog.build_dir || ".\\build\\contracts\\";
process.env.NETWORK_HOST = prog.host || "http://localhost:7545";
process.env.NETWORK_ID = prog.networkId || "5777";

var server = require("../server/build/Index");
try {
	console.info(`Serving application..`);
	server;

	(async () => {
		await open("http://localhost:" + process.env.PORT);
	})();
} catch (ex) {
	console.log("Failed to start service..");
	return;
}
