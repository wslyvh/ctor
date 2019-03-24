import ContractService from "./ContractService";
import { IContractService } from "./IContractService";
import StaticContractService from "./StaticContractService";
import TruffleContractService from "./TruffleContractService";

class ContractServiceFactory {
	public static Create(): IContractService {
		if (this.local) {
			return new ContractService();
		}

		return new StaticContractService();
	}
	private static local: boolean = process.env.REACT_APP_SERVICE ? process.env.REACT_APP_SERVICE === "local" : false;
}

export default ContractServiceFactory;
