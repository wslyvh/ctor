import { Request, Response } from "express";
import { FileController } from "../controllers/fileController";

class Routes {

	public fileController: FileController = new FileController();
	private baseUri = "/api";

	public routes(app: any): void {
		app.route(this.baseUri).get((req: Request, res: Response) => {
			res.status(200).send("Service running..");
		});

		// Files
		app.route(this.baseUri + "/files").get(this.fileController.getFiles);
	}
}

export { Routes };
