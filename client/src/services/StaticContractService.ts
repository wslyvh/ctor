import { ethers, Contract } from "ethers";
import { BaseProvider } from "ethers/providers";
import Contracts from "../data/Etherscan/Contracts.json";
import { IContract } from "../model/IContract";
import Web3Utils from "../utils/Web3Utils";
import { IContractService } from "./IContractService";

class StaticContractService implements IContractService {
	private provider: BaseProvider;

	constructor() {
		this.provider = ethers.getDefaultProvider();
	}

	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isContractAddress(this.provider, address);

		if (!validContractAddress) {
			return null;
		}

		const contract = Contracts.filter(c => c.Address === address)[0];
		let result: IContract | null = null;

		if (contract) {
			result = {
				Address: contract.Address,
				Name: contract.ContractName,
				SourceCode: contract.SourceCode,
				ABI: contract.ABI,
				RawContract: new Contract(address, contract.ABI, this.provider)
			} as IContract;
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		return Contracts.slice(0, limit).map((contract: any) => {
			return {
				Address: contract.Address,
				Name: contract.ContractName,
				SourceCode: contract.SourceCode,
				ABI: contract.ABI,
				RawContract: new Contract(contract.Address, contract.ABI, this.provider)
			} as IContract;
		});
	}
}

export default StaticContractService;
