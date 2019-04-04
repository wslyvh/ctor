import { Request, Response } from "express";
import ContractServiceFactory from "../data/ContractServiceFactory";
import logger from "../utils/Logger";

class ContractController {
	public async GetContract(request: Request, response: Response) {
		logger.debug("GetContract " + request.params.address);
		const client = ContractServiceFactory.Create();

		try {
			const contract = await client.GetContract(request.params.address);

			response.json(contract);
		} catch (ex) {
			logger.error(ex.toString());
			response.status(400).send("Unable to get contract.");
		}
	}

	public async GetContracts(request: Request, response: Response) {
		logger.debug("GetContracts");
		const client = ContractServiceFactory.Create();

		try {
			const contracts = await client.GetContracts(10);
			response.json(contracts);
		} catch (ex) {
			logger.error(ex.toString());
			response.status(400).send("Unable to get contracts.");
		}
	}
}

export { ContractController };
