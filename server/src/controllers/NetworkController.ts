import { Request, Response } from "express";
import AppConfig from "../config/App";
import logger from "../utils/Logger";

class NetworkController {
	public async GetProvider(request: Request, response: Response) {
		logger.debug("GetProvider");

		if (AppConfig.CONTRACT_SERVICE === "local") {
			response.json(AppConfig.PROVIDER_URI);
		} else {
			response.json("default");
		}
	}
}

export { NetworkController };
