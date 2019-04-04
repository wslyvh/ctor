import { ethers, Signer } from "ethers";
import { BaseProvider, JsonRpcProvider } from "ethers/providers";

class Web3Utils {
	private static networkUrl: string = "http://localhost:8545";

	public static isAddress(address: string): boolean {
		try {
			ethers.utils.getAddress(address);
			return true;
		} catch (ex) {
			console.log("Error: invalid address");

			return false;
		}
	}

	public static getProvider(): BaseProvider | Signer {
		if (process.env.REACT_APP_SERVICE === "local") {
			const provider = new JsonRpcProvider(this.networkUrl);
			const signer = provider.getSigner(0);

			return signer;
		}

		return ethers.getDefaultProvider();
	}

	public static canSign(): Boolean {
		if (process.env.REACT_APP_SERVICE === "local") {
			return true;
		}

		return false;
	}
}

export default Web3Utils;
