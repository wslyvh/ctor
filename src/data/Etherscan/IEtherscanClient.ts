
export interface IEtherscanClient {
    getContractAbi(contractAddress: string): Promise<any>;
    getContractSourceCode(contractAddress: string): Promise<any>;
}