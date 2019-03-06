export interface IEtherscanAPIResponse {
    readonly message: "NOTOK" | "OK";
    readonly result: any;
    readonly status: "1" | "0";
}

export interface IEtherscanSourceCodeResult {
    readonly SourceCode: string;
    readonly ABI: string;
    readonly ContractName: string;
    readonly CompilerVersion: string;
    readonly OptimizationUsed: string;
    readonly Runs: string;
    readonly ConstructorArguments: string;
    readonly Library: string;
    readonly SwarmSource: string;
}

export interface IInput {
    readonly name: string;
    readonly type: string;
    readonly indexed?: boolean;
}

export interface IOutput {
    readonly name: string;
    readonly type: string;
}

export interface ITuple extends IOutput {
    readonly type: "tuple";
    readonly components: ReadonlyArray<IOutput>;
}

export interface IContractMember {
    readonly constant?: boolean;
    readonly inputs?: ReadonlyArray<IInput>;
    readonly name?: string;
    readonly outputs?: ReadonlyArray<IOutput | ITuple>;
    readonly type: string;
    readonly payable?: boolean;
    readonly stateMutability?: string;
    readonly anonymous?: boolean;
}

export type ABIResult = ReadonlyArray<IContractMember>;

export type SourceCodeResult = ReadonlyArray<IEtherscanSourceCodeResult>;
