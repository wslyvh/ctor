import { ethers } from "ethers";

export interface IContract {
	Address: string;
	Name?: string;
	SourceCode?: string;
	ABI?: string;
	ConstructorArguments?: string;
	SwarmSource?: string;
	RawContract?: ethers.Contract;
}
