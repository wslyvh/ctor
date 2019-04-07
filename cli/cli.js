#!/usr/bin/env node
var yargs = require("yargs");
var pkg = require("./package.json");

console.info(`${pkg.name} v${pkg.version}`);

process.env.NODE_ENV = "production";
process.env.CONTRACT_SERVICE = "local";

// Get from Args
process.env.PORT = 5500;
process.env.CONTRACT_BUILD_DIR = ".\\build\\contracts\\";
// JsonRPC server url

var server = require("../server/build/Index");
try {
	console.info(`Serving application..`);
	server;
} catch (ex) {
	console.log("Failed to start service..");
	return;
}
