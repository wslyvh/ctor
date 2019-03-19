import { Contract, ethers, Signer } from "ethers";
import { BaseProvider } from "ethers/providers";
import Contracts from "../data/Truffle/Contracts.json";
import { ITruffleContract } from "../data/Truffle/ITruffleTypes";
import { IContract } from "../model/IContract";
import Web3Utils from "../utils/Web3Utils";
import { IContractService } from "./IContractService";

class TruffleContractService implements IContractService {
	private networkUrl: string = "http://localhost:8545";
	private provider: BaseProvider;
	private signer: Signer;

	constructor() {
		const provider = new ethers.providers.JsonRpcProvider(this.networkUrl);

		this.provider = provider;
		this.signer = provider.getSigner(0);
	}

	public async GetContract(address: string): Promise<IContract | null> {
		const validContractAddress = await Web3Utils.isContractAddress(this.provider, address);

		if (!validContractAddress) {
			return null;
		}

		const contract = Contracts.filter(c => c.networks["5777"].address === address)[0];
		const result: IContract | null = null;

		if (contract) {
			return this.MapContract(contract);
		}

		return result;
	}

	public async GetContracts(limit: number = 10): Promise<IContract[]> {
		return Contracts.slice(0, limit).map((contract: ITruffleContract) => {
			return this.MapContract(contract);
		});
	}

	private MapContract(contract: ITruffleContract): IContract {
		let address = "";
		if (contract.networks["1"]) {
			address = contract.networks["1"].address;
		}
		if (contract.networks["3"]) {
			address = contract.networks["3"].address;
		}
		if (contract.networks["4"]) {
			address = contract.networks["4"].address;
		}
		if (contract.networks["5777"]) {
			address = contract.networks["5777"].address;
		}

		const abi = JSON.stringify(contract.abi);
		const raw = new Contract(address, abi, this.signer);

		return {
			Address: address,
			Name: contract.contractName,
			SourceCode: contract.source,
			ABI: abi,
			RawContract: raw
		} as IContract;
	}
}

export default TruffleContractService;
