import { NetworkService } from "./NetworkService";

describe("NetworkService", () => {
	it("should initialize a new instance", () => {
		const networkService = new NetworkService();

		expect(networkService).toBeDefined();
		expect(networkService).toBeInstanceOf(NetworkService);
	});
});
