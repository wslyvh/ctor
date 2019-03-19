import { ethers } from "ethers";
import { BaseProvider } from "ethers/providers";

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

	public static async isContractAddress(provider: BaseProvider, address: string): Promise<boolean> {
		if (this.isAddress(address)) {
			const code = await provider.getCode(address);
			if (code !== "0x") {
				return true;
			}
		}

		console.log("Error: invalid contract address");
		return false;
	}
}

export default Web3Utils;
