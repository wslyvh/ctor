import ContractService from "./ContractService";
import EtherscanContractService from "./EtherscanContractService";
import { IContractService } from "./IContractService";

class ContractServiceFactory {

	public static Create(): IContractService {
		if (this.local) {
			return new ContractService();
		}

		return new EtherscanContractService();
	}
	private static local: boolean = process.env.REACT_APP_SERVICE ? process.env.REACT_APP_SERVICE === "local" : false;
}

export default ContractServiceFactory;
