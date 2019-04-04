import { ethers } from "ethers";
import { BaseProvider } from "ethers/providers";
import logger from "./Logger";

class Web3Utils {
	public static isAddress(address: string): boolean {
		try {
			ethers.utils.getAddress(address);
			return true;
		} catch (ex) {
			logger.error("Error: invalid address");

			return false;
		}
	}

	public static async isContractAddress(provider: BaseProvider, address: string): Promise<boolean> {
		if (this.isAddress(address)) {
			try {
				const code = await provider.getCode(address);

				if (code !== "0x") {
					logger.info(address + " is contract.");
					return true;
				}
			} catch (ex) {
				logger.error("Provider not connected. " + ex.toString());
				return false;
			}
		}

		logger.error("Error: invalid address");
		return false;
	}
}

export default Web3Utils;
