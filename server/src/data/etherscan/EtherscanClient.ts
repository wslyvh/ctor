import axios from "axios";
import AppConfig from "../../config/App";
import logger from "../../utils/Logger";
import { IEtherscanClient } from "./IEtherscanClient";
import { ABIResult, IEtherscanAPIResponse, SourceCodeResult } from "./IEtherscanTypes";

export class EtherscanClient implements IEtherscanClient {
	private apiKey = AppConfig.ETHERSCAN_APIKEY;

	public async getContractAbi(contractAddress: string): Promise<ABIResult | null> {
		logger.info("Get Contract Abi: " + contractAddress);

		const uri = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + contractAddress + "&apikey=" + this.apiKey;
		const response = await axios.get(uri);
		const body = response.data;

		if (response.status !== 200) {
			logger.error(response);
			throw Error(body.message);
		}

		return body.result[0];
	}

	public async getContractSourceCode(contractAddress: string): Promise<SourceCodeResult | null> {
		logger.info("Get Contract SourceCode: " + contractAddress);

		const uri = "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + contractAddress + "&apikey=" + this.apiKey;
		const response = await axios.get(uri);

		if (response.status !== 200) {
			logger.error(response);
			throw new Error(`Error has occurred. ${response.status}`);
		}

		const body = await response.data;
		let etherscanResponse: IEtherscanAPIResponse;

		try {
			etherscanResponse = body;

			if (etherscanResponse.message === "NOTOK" && etherscanResponse.status === "0") {
				if (etherscanResponse.result.length === 1) {
					logger.error("NOTOK - " + etherscanResponse.result[0].ABI);
				} else {
					logger.error("NOTOK - " + etherscanResponse.result);
				}

				return null;
			}

			return etherscanResponse.result;
		} catch (ex) {
			logger.error(ex.toString());
			throw new Error(`Failed to parse json in response body: ${ex.message}`);
		}
	}
}
