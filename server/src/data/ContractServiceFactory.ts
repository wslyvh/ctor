import logger from "../utils/Logger";
import AppConfig from "../config/App";
import { EtherscanContractService } from "./etherscan/EtherscanContractService";
import { IContractService } from "./IContractService";
import { TruffleContractService } from "./truffle/TruffleContractService";

class ContractServiceFactory {
	public static Create(): IContractService {
		if (AppConfig.CONTRACT_SERVICE === "local") {
			logger.info("Creating local TruffleContractService...");
			return new TruffleContractService();
		}

		logger.info("Creating default EtherscanContractService...");
		return new EtherscanContractService();
	}
}

export default ContractServiceFactory;
