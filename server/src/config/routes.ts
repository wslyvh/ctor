import { Request, Response } from "express";
import path from "path";
import { Files } from "../utils/files";

class Routes {
	public routes(app: any): void {
		app.route("/").get((req: Request, res: Response) => {
			res.status(200).send("Service running..");
		});

		app.route("/files").get((req: Request, res: Response) => {
			var dir = path.join(__dirname, "../../../", "truffle/build/contracts");
			console.log("Getting files from: " + dir);

			var files = Files.GetJsonFiles(dir);
			res.status(200).send(files);
		});
	}
}

export { Routes };
