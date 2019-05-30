import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

const projectRoot = path.join(__dirname, "../../../");
const AppConfig = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000,

	LOG_DIR: process.env.LOG_DIR || "logs",
	LOG_LEVEL: process.env.NODE_ENV === "production" ? "error" : "debug",

	ETHERSCAN_APIKEY: process.env.ETHERSCAN_APIKEY,
	NETWORK_HOST: process.env.NETWORK_HOST || "http://localhost:7545",
	NETWORK_ID: process.env.NETWORK_ID || "5777",
	CONTRACT_BUILD_DIR: process.env.CONTRACT_BUILD_DIR ? process.env.CONTRACT_BUILD_DIR : "./build/contracts",
	UI_DIR: process.env.ui_directory ? path.join(projectRoot, process.env.ui_directory) : path.join(projectRoot, "client/build")
};

export = AppConfig;
