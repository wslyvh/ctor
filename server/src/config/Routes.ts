import { Request, Response } from "express";
import { ContractController } from "../controllers/ContractController";
import { NetworkController } from "../controllers/NetworkController";

class Routes {
	private baseUri = "/api";

	private contractController: ContractController = new ContractController();
	private networkController: NetworkController = new NetworkController();

	public routes(app: any): void {
		app.route(this.baseUri).get((req: Request, res: Response) => {
			res.status(200).send("Service running..");
		});

		// Network
		app.route(this.baseUri + "/provider").get(this.networkController.GetProvider);
		app.route(this.baseUri + "/accounts").get(this.networkController.GetAccounts);

		// Contracts
		app.route(this.baseUri + "/contracts").get(this.contractController.GetContracts);
		app.route(this.baseUri + "/contracts/:address").get(this.contractController.GetContract);
	}
}

export { Routes };
