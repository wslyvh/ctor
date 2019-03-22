import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API calls
app.get("/api", async (req, res) => {
	const result = "Hello World";
	res.json(result);
});

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "..", "client/build")));

	// Handle React routing, return all requests to React app
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
