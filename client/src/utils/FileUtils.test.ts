import FileUtils from "./FileUtils";

const filesInDefaultDirectory = 1;

describe("FileUtils", () => {
	it("should initialize a new instance", () => {
		const fileManager = new FileUtils();

		expect(fileManager).toBeDefined();
		expect(fileManager).toBeInstanceOf(FileUtils);
	});
});

describe("Directories", () => {
	it("should get all files, from directory path, with trailing slash", () => {
		const files = FileUtils.GetJsonFiles("./tests/contracts/");

		expect(files.length).toEqual(filesInDefaultDirectory);
	});

	it("should get all files, from directory path, without trailing slash", () => {
		const files = FileUtils.GetJsonFiles("./tests/contracts");

		expect(files.length).toEqual(filesInDefaultDirectory);
	});

	it("should throw if path doesn't exist", () => {
		expect(() => FileUtils.GetJsonFiles("./invalid/path")).toThrowError("Path doesn't exist.");
	});
});

describe("Files", () => {
	it("should get a single file", () => {
		const files = FileUtils.GetJsonFiles("./tests/contracts/MetaCoin.json");

		expect(files).toBeDefined();
		expect(files.length).toEqual(1);
	});

	it("should ignore non-json files", () => {
		const files = FileUtils.GetJsonFiles("./tests/contracts/InvalidFile.contract");

		expect(files).toBeDefined();
		expect(files.length).toEqual(0);
	});

	it("should throw if file doesn't exist", () => {
		expect(() => FileUtils.GetJsonFiles("./invalid/file.json")).toThrowError("Path doesn't exist.");
	});
});
