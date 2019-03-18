export interface ITruffleContract {
	contractName: string;
	abi: any;
	bytecode: string;
	deployedBytecode: string;
	sourceMap: string;
	deployedSourceMap: string;
	source: string;
	compiler: ICompiler;
	networks: INetworks;
	schemaVersion: string;
	updatedAt: string;
}

export interface ICompiler {
	name: string;
	version: string;
}

export interface INetworks {
	[name: string]: INetwork;
}

export interface INetwork {
	events: any;
	links: any;
	address: string;
	transactionHash: string;
}
