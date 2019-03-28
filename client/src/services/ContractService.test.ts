import { ContractService } from "./ContractService";

describe("ContractService", () => {
	it("should initialize a new instance", () => {
		const contractService = new ContractService();

		expect(contractService).toBeDefined();
		expect(contractService).toBeInstanceOf(ContractService);
	});
});
