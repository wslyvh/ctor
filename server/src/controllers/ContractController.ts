import { Request, Response } from "express";
import EtherscanContractService from "../data/EtherscanContractService";
import { IContractService } from "../data/IContractService";
import logger from "../utils/Logger";

class ContractController {
	private client: IContractService;

	constructor() {
		this.client = new EtherscanContractService();
	}

	public async GetContract(request: Request, response: Response) {
		try {
			const contract = await this.client.GetContract(request.params.address);
			response.json(contract);
		} catch (error) {
			logger.error(error);
			response.status(400).send("Unable to get contract.");
		}
	}

	public async GetContracts(request: Request, response: Response) {
		try {
			const contracts = await this.client.GetContracts(10);
			response.json(contracts);
		} catch (error) {
			logger.error(error);
			response.status(400).send("Unable to get contract.");
		}
	}
}

export { ContractController };
