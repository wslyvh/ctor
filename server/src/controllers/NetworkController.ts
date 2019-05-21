import { ethers } from "ethers";
import { Request, Response } from "express";
import AppConfig from "../config/App";
import logger from "../utils/Logger";

class NetworkController {
	public async GetProvider(request: Request, response: Response) {
		logger.debug("GetProvider");

		if (AppConfig.CONTRACT_SERVICE === "local") {
			response.json(AppConfig.NETWORK_HOST);
		} else {
			response.json("default");
		}
	}

	public async GetAccounts(request: Request, response: Response) {
		logger.debug("GetAccounts");
		let accounts = new Array<string>();

		if (AppConfig.CONTRACT_SERVICE === "local") {
			const provider = new ethers.providers.JsonRpcProvider(AppConfig.NETWORK_HOST);
			try {
				accounts = await provider.listAccounts();
			} catch (ex) {
				logger.error("Unable to list account(s)");
			}
		}

		response.json(accounts);
	}
}

export { NetworkController };
