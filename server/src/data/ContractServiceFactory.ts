import AppConfig from "../config/App";
import logger from "../utils/Logger";
import { EtherscanContractService } from "./etherscan/EtherscanContractService";
import { IContractService } from "./IContractService";
import { TruffleContractService } from "./truffle/TruffleContractService";

class ContractServiceFactory {
	public static Create(): IContractService {
		if (AppConfig.NETWORK_HOST.includes("localhost") || AppConfig.NETWORK_HOST.includes("127.0.0.1")) {
			logger.info("Creating local TruffleContractService...");
			return new TruffleContractService();
		}

		logger.info("Creating default EtherscanContractService...");
		return new EtherscanContractService();
	}
}

export default ContractServiceFactory;
