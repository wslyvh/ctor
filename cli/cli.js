#!/usr/bin/env node
var open = require("open");
var prog = require("commander");
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
process.env.PROVIDER_URI = prog.host || "http://localhost:7545";

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
