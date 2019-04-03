#!/usr/bin/env node
var yargs = require("yargs");
var pkg = require("./package.json");
var server = require("../server/build/Index");

console.info(`${pkg.name} v${pkg.version}`);

serve(5000);

function serve(port) {
	console.info(`Serving application..`);
	try {
		server;
	} catch (ex) {
		console.log("Failed to start service..");
		return;
	}
}
