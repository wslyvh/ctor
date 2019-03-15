import React, { Component } from "react";
import { IContract } from "../../model/IContract";
import { IContractService } from "../../services/IContractService";
import StaticContractService from "../../services/StaticContractService";

interface IProps {
	limit: number;
}

class ContractOverview extends Component<IProps> {
	public static defaultProps = {
		limit: 10
	};

	public state = {
		contracts: new Array<IContract>()
	};

	private contractService: IContractService;

	constructor(props: IProps) {
		super(props);

		this.contractService = new StaticContractService();
	}

	public async componentDidMount() {
		const contracts = await this.contractService.GetContracts(this.props.limit);

		this.setState({
			contracts
		});
	}

	public render() {
		return (
			<>
				<div className="advance-search">
					<h2>Contracts overview</h2>
					<div className="row">
						<ul className="results">
							{this.state.contracts.map((contract, index) => {
								return (
									<li key={index}>
										<a href={"/contract/" + contract.Address}>{contract.Address}</a>
										<small>{contract.Name}</small>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default ContractOverview;
