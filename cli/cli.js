#!/usr/bin/env node
var yargs = require("yargs");
var pkg = require("./package.json");

console.info(`${pkg.name} v${pkg.version}`);

process.env.NODE_ENV = "production";
process.env.PORT = 5500;
process.env.contracts_build_directory = "..\\truffle\\build\\contracts\\";
process.env.CONTRACT_SERVICE = "local";

var server = require("../server/build/Index");
serve(process.env.PORT);

function serve(port) {
	console.info(`Serving application..`);
	try {
		server;
	} catch (ex) {
		console.log("Failed to start service..");
		return;
	}
}
