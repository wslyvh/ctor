import { Request, Response } from "express";
import { ContractController } from "../controllers/ContractController";
import { FileController } from "../controllers/FileController";

class Routes {
	private baseUri = "/api";

	private fileController: FileController = new FileController();
	private contractController: ContractController = new ContractController();

	public routes(app: any): void {
		app.route(this.baseUri).get((req: Request, res: Response) => {
			res.status(200).send("Service running..");
		});

		// Files
		app.route(this.baseUri + "/files").get(this.fileController.getFiles);

		// Contracts
		app.route(this.baseUri + "/contracts").get(this.contractController.GetContracts);
		app.route(this.baseUri + "/contracts/:address").get(this.contractController.GetContract);
	}
}

export { Routes };
