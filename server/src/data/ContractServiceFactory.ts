import logger from "../utils/Logger";
import { EtherscanContractService } from "./etherscan/EtherscanContractService";
import { IContractService } from "./IContractService";
import { TruffleContractService } from "./truffle/TruffleContractService";

class ContractServiceFactory {
	public static Create(): IContractService {
		if (this.local) {
			logger.info("Creating local TruffleContractService...");
			return new TruffleContractService();
		}

		logger.info("Creating default EtherscanContractService...");
		return new EtherscanContractService();
	}
	private static local: boolean = process.env.CONTRACT_SERVICE ? process.env.CONTRACT_SERVICE === "local" : false;
}

export default ContractServiceFactory;
