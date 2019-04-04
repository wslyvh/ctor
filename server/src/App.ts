import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import expressValidator from "express-validator";
import path from "path";
import AppConfig from "./config/App";
import { Routes } from "./config/Routes";

class App {
	public app: express.Application;
	public routes: Routes = new Routes();

	constructor() {
		this.app = express();
		this.config();
	}

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cors());
		this.app.use(compression());
		this.app.use(expressValidator());

		this.routes.routes(this.app);

		if (AppConfig.NODE_ENV === "production") {
			// Serve any static files
			this.app.use(express.static(AppConfig.UI_DIR));

			// Handle React routing, return all requests to React app
			this.app.get("*", (req, res) => {
				res.sendFile(path.join(AppConfig.UI_DIR, "index.html"));
			});
		}
	}
}

export default new App().app;
