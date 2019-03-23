import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import compression from "compression";
import express from "express";
import expressValidator from "express-validator";
import { Routes } from "./config/routes";
import config from "./config/app";

class App {
	public app: express.Application;
	public routes: Routes = new Routes();

	constructor() {
		this.app = express();
		this.config();
		this.routes.routes(this.app);
	}

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cors());
		this.app.use(compression());
		this.app.use(expressValidator());

		if (config.NODE_ENV === "production") {
			// Serve any static files
			this.app.use(express.static(path.join(__dirname, "..", "client/build")));

			// Handle React routing, return all requests to React app
			this.app.get("*", (req, res) => {
				res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
			});
		}
	}
}

export default new App().app;
