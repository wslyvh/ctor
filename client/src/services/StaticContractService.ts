import { IContract } from "../model/IContract";
import { IContractService } from "./IContractService";

class StaticContractService implements IContractService {

    private contracts = [{
        Name: "The DAO",
        Address: "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
    }, {
        Name: "Gnosis Multisig wallet",
        Address: "0x851b7f3ab81bd8df354f0d7640efcd7288553419",
    }, {
        Name: "Vyper Contract",
        Address: "0x06A981Bd291C6BFaaB9954dDcEEb782dE805b4b3",
    }, {
        Name: "Moloch DAO",
        Address: "0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1",
    }, {
        Name: "Maker (MKR) Token",
        Address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    }, {
        Name: "Idex Exchange",
        Address: "0x2a0c0DBEcC7E4D658f48E01e3fA353F44050c208",
    }, {
        Name: "Crypto KittyCore",
        Address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    }, {
        Name: "Wrapped Ether",
        Address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    }, {
        Name: "EtherDelta",
        Address: "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
    }, {
        Name: "Wallet",
        Address: "0x94a9251580f1bd08e641f735feebf066addee64c",
    }];

    public async GetContract(address: string): Promise<IContract | null> {
        return this.contracts.filter((c) => c.Address === address)[0];
    }

    public async GetContracts(limit: number = 10): Promise<IContract[]> {
        return this.contracts;
    }
}

export default StaticContractService;
