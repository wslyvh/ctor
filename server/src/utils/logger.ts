import fs = require("fs");
import * as winston from "winston";
import config from "../config/app";

if (!fs.existsSync(config.LOG_DIR)) {
	fs.mkdirSync(config.LOG_DIR);
}

const level = config.LOG_LEVEL;
const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
	transports: [
		new winston.transports.Console({ level }),
		new winston.transports.File({
			filename: "./logs/errors.log",
			level: "error",
			handleExceptions: true,
			maxsize: 2000000,
			maxFiles: 10
		})
	]
});

logger.debug(`Logging initialized at '${level}' level`);

export default logger;
