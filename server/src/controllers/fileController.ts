import { Request, Response } from "express";
import * as fs from "fs";
import { Files } from "../utils/files";
import logger from "../utils/logger";

class FileController {
	public async getFiles(request: Request, response: Response) {
		const dir = process.env.contracts_build_directory ? process.env.contracts_build_directory : ".build/contracts";

		logger.info("Fetching files from: " + dir);
		const exists = fs.existsSync(dir);
		if (!exists) {
			response.status(500).send("Path doesn't exist.");
			return;
		}

		try {
			const files = Files.GetJsonFiles(dir);
			response.json(files);
		} catch (error) {
			logger.error(error);
			response.status(500).send("Unable to get files.");
		}
	}
}

export { FileController };
