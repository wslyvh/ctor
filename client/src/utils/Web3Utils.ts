import { ethers, Signer } from "ethers";
import { BaseProvider, JsonRpcProvider } from "ethers/providers";
import { NetworkService } from "../services/NetworkService";

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
		const service = new NetworkService();
		const providerHost = await service.GetProvider();

		if (providerHost) {
			const provider = new JsonRpcProvider(providerHost);
			const accounts = await service.GetAccounts();
			if (accounts[0]) {
				const signer = provider.getSigner(accounts[0]);
				return signer;
			}
			return provider;
		}

		return ethers.getDefaultProvider();
	}

	public static async canSign(): Promise<boolean> {
		const providerOrSigner = await this.getProvider();
		return Signer.isSigner(providerOrSigner);
	}
}

export default Web3Utils;
