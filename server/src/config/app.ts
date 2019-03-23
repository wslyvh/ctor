import * as dotenv from "dotenv";

dotenv.config();

const appConfig = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,

	LOG_DIR: process.env.LOG_DIR || "logs",
	LOG_LEVEL: process.env.LOG_LEVEL === "production" ? "error" : "debug"
};

export = appConfig;
