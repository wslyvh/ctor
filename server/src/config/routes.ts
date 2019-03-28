import { Request, Response } from "express";
import { ContractController } from "../controllers/ContractController";

class Routes {
	private baseUri = "/api";

	private contractController: ContractController = new ContractController();

	public routes(app: any): void {
		app.route(this.baseUri).get((req: Request, res: Response) => {
			res.status(200).send("Service running..");
		});

		// Contracts
		app.route(this.baseUri + "/contracts").get(this.contractController.GetContracts);
		app.route(this.baseUri + "/contracts/:address").get(this.contractController.GetContract);
	}
}

export { Routes };
