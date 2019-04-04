import { Contract, ethers } from "ethers";
import { BaseProvider } from "ethers/providers";
import { IContract } from "../../models/IContract";
import Web3Utils from "../../utils/Web3Utils";
import { IContractService } from "../IContractService";
import Contracts from "./Contracts.json";
import { EtherscanClient } from "./EtherscanClient";
import { IEtherscanClient } from "./IEtherscanClient";
import { IEtherscanSourceCodeResult } from "./IEtherscanTypes";

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
			return this.MapContract(address, contract);
		}

		return null;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		return Contracts.slice(0, limit).map((contract: any) => {
			return this.MapContract(contract.Address, contract);
		});
	}

	private MapContract(address: string, contract: any): IContract {
		return {
			Address: address,
			Name: contract.ContractName,
			SourceCode: contract.SourceCode,
			ABI: contract.ABI,
			RawContract: new Contract(address, contract.ABI, this.provider)
		} as IContract;
	}
}

export { EtherscanContractService };
