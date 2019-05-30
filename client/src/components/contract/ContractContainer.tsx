import { Alert } from "antd";
import React, { Component } from "react";
import "../../assets/styles/custom.scss";
import { ContractService } from "../../services/ContractService";
import { IContractService } from "../../services/IContractService";
import Web3Utils from "../../utils/Web3Utils";
import Loader from "../layoutComponents/Loader";
import ContractView from "./ContractView";

interface IProps {
	address: string;
}

class ContractContainer extends Component<IProps> {
	public state = {
		loading: true,
		error: false,
		errorMessage: "",
		contract: {
			Address: this.props.address
		}
	};

	private contractService: IContractService;

	constructor(props: IProps) {
		super(props);

		this.contractService = new ContractService();
	}

	public async componentDidMount() {
		const address = this.props.address;
		if (!Web3Utils.isAddress(address)) {
			this.setState({
				loading: false,
				error: true,
				errorMessage: "Invalid contract address"
			});

			return;
		}

		const contract = await this.contractService.GetContract(address);
		if (!contract) {
			this.setState({
				loading: false,
				error: true,
				errorMessage: "Unable to retrieve contract"
			});

			return;
		}

		this.setState({
			loading: false,
			contract
		});
	}

	public render() {
		return (
			<>
				<div>
					{this.state.error && <Alert message="Error" description={this.state.errorMessage} type="error" showIcon />}

					{this.state.loading && <Loader />}

					<ContractView contract={this.state.contract} />
				</div>
			</>
		);
	}
}

export default ContractContainer;
