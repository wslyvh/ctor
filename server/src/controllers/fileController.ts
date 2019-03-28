import { Request, Response } from "express";
import * as fs from "fs";
import AppConfig from "../config/App";
import { FileUtils } from "../utils/FileUtils";
import logger from "../utils/Logger";

class FileController {
	public async getFiles(request: Request, response: Response) {
		const dir = AppConfig.CONTRACTS_BUILD_DIR;

		logger.info("Fetching files from: " + dir);
		const exists = fs.existsSync(dir);
		if (!exists) {
			response.status(500).send("Path doesn't exist.");
			return;
		}

		try {
			const files = FileUtils.GetJsonFiles(dir);
			response.json(files);
		} catch (error) {
			logger.error(error);
			response.status(500).send("Unable to get files.");
		}
	}
}

export { FileController };
