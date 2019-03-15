import { ethers } from "ethers";
import { BaseProvider } from "ethers/providers";
import Contracts from "../data/Contracts.json";
import { IContract } from "../model/IContract";
import FileUtils from "../utils/FileUtils.js";
import Web3Utils from "../utils/Web3Utils";
import { IContractService } from "./IContractService";

class TruffleContractService implements IContractService {
	private provider: BaseProvider;
	private contractsFolder: string = "./tests/contracts/";
	// private networkId = "1";

	constructor() {
		this.provider = ethers.getDefaultProvider();
	}

	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isContractAddress(this.provider, address);

		if (!validContractAddress) {
			return null;
		}

		const contract = FileUtils.getFile(this.contractsFolder + address); // rename address to name/id?
		let result: IContract | null = null;

		if (contract) {
			result = {
				Address: contract.Address, // TODO: Check network Ids
				Name: contract.ContractName,
				SourceCode: contract.SourceCode,
				ABI: contract.ABI
			} as IContract;
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		const files = FileUtils.GetJsonFiles(this.contractsFolder);

		return Contracts.slice(0, limit).map((contract: any) => {
			return {
				Address: contract.Address, // TODO: Check network Ids
				Name: contract.contractName,
				SourceCode: contract.source,
				ABI: contract.abi
			} as IContract;
		});
	}
}

export default TruffleContractService;
