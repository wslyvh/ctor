import { ethers } from "ethers";

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
}

export default Web3Utils;
