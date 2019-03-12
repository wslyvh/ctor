import { ethers } from "ethers";
import { BaseProvider } from "ethers/providers";
import Contracts from "../data/Contracts.json";
import { EtherscanClient } from "../data/Etherscan/EtherscanClient";
import { IEtherscanClient } from "../data/Etherscan/IEtherscanClient";
import { IEtherscanSourceCodeResult } from "../data/Etherscan/IEtherscanTypes";
import { IContract } from "../model/IContract";
import Web3Utils from "../utils/Web3Utils";
import { IContractService } from "./IContractService";

class EtherscanContractService implements IContractService {
	private provider: BaseProvider;
	private client: IEtherscanClient;

	constructor() {
		this.provider = ethers.getDefaultProvider();
		this.client = new EtherscanClient();
	}

	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isContractAddress(this.provider, address);
		if (!validContractAddress) {
			return null;
		}

		let contract: IEtherscanSourceCodeResult;
		const etherscanResult = await this.client.getContractSourceCode(address);
		if (etherscanResult && etherscanResult.length > 0) {
			contract = etherscanResult[0];
			if (contract.ABI === "Contract source code not verified") {
				return null;
			}

			return {
				Name: contract.ContractName,
				Address: address,
				SourceCode: contract.SourceCode,
				ABI: contract.ABI,
				ConstructorArguments: contract.ConstructorArguments,
				SwarmSource: contract.SwarmSource
			};
		}

		return null;
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

export default EtherscanContractService;
