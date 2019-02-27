import { IEtherscanClient } from "./IEtherscanClient";

export class EtherscanClient implements IEtherscanClient {

    private apiKey = process.env.REACT_APP_ETHERSCAN_APIKEY;

    public async getContractAbi(contractAddress: string): Promise<any> {
        const uri = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + contractAddress + "&apikey=" + this.apiKey;
        const response = await fetch(uri);
        const body = await response.json();

        if (response.status !== 200) {
            console.log(response);
            throw Error(body.message);
        }

        return body.result[0];
    }

    public async getContractSourceCode(contractAddress: string): Promise<any> {
        const uri = "https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + contractAddress + "&apikey=" + this.apiKey;
        const response = await fetch(uri);
        const body = await response.json();

        if (response.status !== 200) {
            console.log(response);
            throw Error(body.message);
        } else if (body.status === "0") {
            console.log(body.message);
            return null;
        }

        return body.result[0];
    }
}
