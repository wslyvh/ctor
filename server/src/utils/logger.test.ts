import logger from "./logger";

describe("Creating a Logger ", () => {
	it("exports at instance logger", () => {
		expect(logger).toBeDefined();
		expect(logger.level).toBe("info");
		expect(logger.transports.length).toBe(2);
	});
});
