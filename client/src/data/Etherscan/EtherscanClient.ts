import { IEtherscanClient } from "./IEtherscanClient";
import { ABIResult, IEtherscanAPIResponse, SourceCodeResult } from "./IEtherscanTypes";

export class EtherscanClient implements IEtherscanClient {
	private apiKey = process.env.REACT_APP_ETHERSCAN_APIKEY;

	public async getContractAbi(contractAddress: string): Promise<ABIResult | null> {
		const uri = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + contractAddress + "&apikey=" + this.apiKey;
		const response = await fetch(uri);
		const body = await response.json();

		if (response.status !== 200) {
			console.log(response);
			throw Error(body.message);
		}

		return body.result[0];
	}

	public async getContractSourceCode(contractAddress: string): Promise<SourceCodeResult | null> {
		const uri = "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + contractAddress + "&apikey=" + this.apiKey;
		const response = await fetch(uri);

		if (response.status !== 200) {
			throw new Error(`Error has occurred. ${response.status}`);
		}

		const body = await response.text();
		let etherscanResponse: IEtherscanAPIResponse;

		try {
			etherscanResponse = JSON.parse(body);

			if (etherscanResponse.message === "NOTOK" && etherscanResponse.status === "0") {
				if (etherscanResponse.result.length === 1) {
					console.log("NOTOK - " + etherscanResponse.result[0].ABI);
				} else {
					console.log("NOTOK - " + etherscanResponse.result);
				}

				return null;
			}

			return etherscanResponse.result;
		} catch (err) {
			console.log(err);
			throw new Error(`Failed to parse json in response body: ${err.message}`);
		}
	}
}
