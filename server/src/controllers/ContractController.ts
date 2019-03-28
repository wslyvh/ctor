import { Request, Response } from "express";
import EtherscanContractService from "../data/EtherscanContractService";
import logger from "../utils/Logger";

class ContractController {
	public async GetContract(request: Request, response: Response) {
		var client = new EtherscanContractService();

		try {
			const contract = await client.GetContract(request.params.address);
			response.json(contract);
		} catch (error) {
			logger.error(error.toString());
			response.status(400).send("Unable to get contract.");
		}
	}

	public async GetContracts(request: Request, response: Response) {
		var client = new EtherscanContractService();

		try {
			const contracts = await client.GetContracts(10);
			response.json(contracts);
		} catch (error) {
			logger.error(error.toString());
			response.status(400).send("Unable to get contracts.");
		}
	}
}

export { ContractController };
