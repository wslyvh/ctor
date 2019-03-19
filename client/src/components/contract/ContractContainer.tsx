import React, { Component } from "react";
import { IContractService } from "../../services/IContractService";
import StaticContractService from "../../services/StaticContractService";
import ContractView from "./ContractView";
import TruffleContractService from "../../services/TruffleContractService";

interface IProps {
	address: string;
}

class ContractContainer extends Component<IProps> {
	public state = {
		error: false,
		contract: {
			Address: this.props.address
		}
	};

	private contractService: IContractService;

	constructor(props: IProps) {
		super(props);

		// this.contractService = new StaticContractService();
		this.contractService = new TruffleContractService();
	}

	public async componentDidMount() {
		const address = this.props.address;
		const contract = await this.contractService.GetContract(address);
		console.log(contract);

		this.setState({
			error: false,
			contract
		});
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
}

export default ContractContainer;
