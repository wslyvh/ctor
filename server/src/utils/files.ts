import * as fs from "fs";

class Files {
	public static GetJsonFiles(path: string): any[] {
		const exists = fs.existsSync(path);
		if (!exists) {
			throw new Error("Path doesn't exist.");
		}

		const files = Array<any>();
		const stat = fs.lstatSync(path);

		// Get files from directory
		if (stat.isDirectory()) {
			fs.readdirSync(path).forEach((filename: string) => {
				const filePath = path.endsWith("/") ? path + filename : path + "/" + filename;

				if (filePath.endsWith(".json")) {
					const file = this.getFile(filePath);
					files.push(file);
				}
			});

			return files;
		}

		// Get single file
		if (path.endsWith(".json")) {
			const file = this.getFile(path);
			files.push(file);
		}

		return files;
	}

	public static getFile(filePath: string) {
		const buffer = fs.readFileSync(filePath, "utf8");
		const file = JSON.parse(buffer);

		return file;
	}
}

export { Files };
