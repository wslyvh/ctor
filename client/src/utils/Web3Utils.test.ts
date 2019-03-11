import Web3Utils from "./Web3Utils";

describe("Web3Utils", () => {
	it("should return true for a valid address", () => {
		const result = Web3Utils.isAddress("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");

		expect(result).toBe(true);
	});

	it("should return false for a invalid address", () => {
		const result = Web3Utils.isAddress("invalid");

		expect(result).toBe(false);
	});
});
