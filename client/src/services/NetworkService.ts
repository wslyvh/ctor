import { INetworkService } from "./INetworkService";

class NetworkService implements INetworkService {
	public async GetProvider(): Promise<string | null> {
		try {
			const response = await fetch("/api/provider");
			return await response.json();
		} catch (ex) {
			console.log(ex);
		}

		return null;
	}

	public async GetAccounts(): Promise<string[]> {
		const response = await fetch("/api/accounts");

		if (response.status !== 200) {
			console.log(response.statusText);
			return [];
		}
		try {
			const body = await response.json();
			return body;
		} catch (ex) {
			console.log(ex);
		}
		return [];
	}
}

export { NetworkService };
