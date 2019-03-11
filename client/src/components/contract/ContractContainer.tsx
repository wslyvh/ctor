import { ethers } from "ethers";
import React, { Component } from "react";
import { EtherscanClient } from "../../data/Etherscan/EtherscanClient";
import { IEtherscanClient } from "../../data/Etherscan/IEtherscanClient";
import { IContract } from "../../model/IContract";
import { BaseProvider } from "ethers/providers";
import { IEtherscanSourceCodeResult } from "../../data/Etherscan/IEtherscanTypes";
import ContractView from "./ContractView";

interface IProps {
	address: string;
}

class ContractContainer extends Component<IProps> {
	private provider: BaseProvider;
	private client: IEtherscanClient;

	public state = {
		error: false,
		contract: {
			Address: this.props.address
		}
	};

	constructor(props: IProps) {
		super(props);

		this.provider = ethers.getDefaultProvider();
		this.client = new EtherscanClient();
	}

	public async componentDidMount() {
		const address = this.props.address;
		const validAddress = this.validateAddressFormat(address);

		if (!validAddress) return;

		let contract: IEtherscanSourceCodeResult;
		const etherscanResult = await this.client.getContractSourceCode(address);
		if (!etherscanResult) {
			this.setState({
				error: true
			});

			return;
		}

		if (etherscanResult && etherscanResult.length > 0) {
			contract = etherscanResult[0];
			if (contract.ABI === "Contract source code not verified") {
				this.setState({
					error: true
				});

				return;
			}

			const etherContract = new ethers.Contract(address, contract.ABI, this.provider);
			var ctr: IContract = {
				Name: contract.ContractName,
				Address: address,
				SourceCode: contract.SourceCode,
				ABI: contract.ABI,
				ConstructorArguments: contract.ConstructorArguments,
				SwarmSource: contract.SwarmSource
			};

			this.setState({
				error: false,
				contract: ctr
			});
		}
	}

	public render() {
		return (
			<>
				{this.state.error && <div>Error</div>}

				<div>
					<ContractView contract={this.state.contract} />
				</div>
			</>
		);
	}

	private validateAddressFormat(address: string): boolean {
		try {
			ethers.utils.getAddress(address);
			return true;
		} catch (ex) {
			console.log("Error: invalid address");

			this.setState({
				error: true
			});
			return false;
		}
	}
}

export default ContractContainer;
