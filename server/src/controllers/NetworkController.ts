import { ethers } from "ethers";
import { Request, Response } from "express";
import AppConfig from "../config/App";
import logger from "../utils/Logger";

class NetworkController {
	public async GetProvider(request: Request, response: Response) {
		logger.debug("GetProvider");
		response.json(AppConfig.NETWORK_HOST);
	}

	public async GetAccounts(request: Request, response: Response) {
		logger.debug("GetAccounts");
		let accounts = new Array<string>();

		const provider = new ethers.providers.JsonRpcProvider(AppConfig.NETWORK_HOST);
		try {
			accounts = await provider.listAccounts();
		} catch (ex) {
			logger.error("Unable to list account(s)");
		}

		response.json(accounts);
	}
}

export { NetworkController };
