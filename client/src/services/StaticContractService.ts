import { IContract } from "../model/IContract";
import { IContractService } from "./IContractService";
import Contracts from "../data/Contracts.json";

class StaticContractService implements IContractService {
	public async GetContract(address: string): Promise<IContract | null> {
		var contract = Contracts.filter(c => c.Address === address)[0];
		let result: IContract | null = null;

		if (contract) {
			result = <IContract>{
				Name: contract.ContractName,
				Address: contract.Address
			};
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		return Contracts.slice(0, limit).map((contract: any) => {
			return <IContract>{
				Name: contract.ContractName,
				Address: contract.Address
			};
		});
	}
}

export default StaticContractService;
