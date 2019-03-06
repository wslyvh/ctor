import { ABIResult, SourceCodeResult } from "./IEtherscanTypes";

export interface IEtherscanClient {
    getContractAbi(contractAddress: string): Promise<ABIResult | null>;
    getContractSourceCode(contractAddress: string): Promise<SourceCodeResult | null>;
}
