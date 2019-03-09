import Contracts from "../data/Contracts.json";
import { IContract } from "../model/IContract";
import { IContractService } from "./IContractService";

class StaticContractService implements IContractService {
	public async GetContract(address: string): Promise<IContract | null> {
		const contract = Contracts.filter(c => c.Address === address)[0];
		let result: IContract | null = null;

		if (contract) {
			result = {
				Name: contract.ContractName,
				Address: contract.Address
			} as IContract;
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		return Contracts.slice(0, limit).map((contract: any) => {
			return {
				Name: contract.ContractName,
				Address: contract.Address
			} as IContract;
		});
	}
}

export default StaticContractService;
