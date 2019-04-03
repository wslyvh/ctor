import { IContract } from "../model/IContract";
import Web3Utils from "../utils/Web3Utils";
import { IContractService } from "./IContractService";

class ContractService implements IContractService {
	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isAddress(address);

		if (!validContractAddress) {
			return null;
		}

		const response = await fetch("/api/contracts/" + address);
		if (response.status !== 200) {
			console.log(response.statusText);
			return null;
		}

		const body = await response.json();
		return body;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		const response = await fetch("/api/contracts");

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

export { ContractService };
