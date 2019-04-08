#!/usr/bin/env node

let prog = require("commander");
var pkg = require("./package.json");

// Defaults
process.env.NODE_ENV = "production";
process.env.CONTRACT_SERVICE = "local";

prog
	.version(`${pkg.name} v${pkg.version}`, "-v, --version")
	.option("-p, --port [port]", "port to serve from")
	.option("-b, --build_dir [build_dir]", "truffle contracts build directory")
	.option("-h, --host [host]", "rpc provider host")
	.parse(process.argv);

// Args
process.env.PORT = prog.port || 5500;
process.env.CONTRACT_BUILD_DIR = prog.build_dir || ".\\build\\contracts\\";
process.env.PROVIDER_URI = prog.host || "http://localhost:8545";

var server = require("../server/build/Index");
try {
	console.info(`Serving application..`);
	server;
} catch (ex) {
	console.log("Failed to start service..");
	return;
}
