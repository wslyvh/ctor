import { ethers, Signer } from "ethers";
import { BaseProvider, JsonRpcProvider } from "ethers/providers";

class Web3Utils {
	public static isAddress(address: string): boolean {
		try {
			ethers.utils.getAddress(address);
			return true;
		} catch (ex) {
			console.log("Error: invalid address");

			return false;
		}
	}

	public static async getProvider(): Promise<BaseProvider | Signer> {
		if (process.env.REACT_APP_SERVICE === "local") {
			const response = await fetch("/api/provider");

			if (response.status !== 200) {
				console.log(response.statusText);
				return ethers.getDefaultProvider();
			}

			const body = await response.json();
			const provider = new JsonRpcProvider(body);
			const signer = provider.getSigner(0);

			return signer;
		}

		return ethers.getDefaultProvider();
	}

	public static canSign(): boolean {
		if (process.env.REACT_APP_SERVICE === "local") {
			return true;
		}

		return false;
	}
}

export default Web3Utils;
