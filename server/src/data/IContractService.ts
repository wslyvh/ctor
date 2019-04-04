import { IContract } from "../models/IContract";

export interface IContractService {
	GetContract(address: string): Promise<IContract | null>;
	GetContracts(limit: number): Promise<IContract[]>;
}
