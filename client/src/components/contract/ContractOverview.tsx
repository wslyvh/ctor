import React, { Component } from "react";
import { IContract } from "../../model/IContract";
import { ContractService } from "../../services/ContractService";
import { IContractService } from "../../services/IContractService";

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

		this.contractService = new ContractService();
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
				<div className="table-responsive">
					<table className="table table-striped table-sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{this.state.contracts.map((contract, index) => {
								return (
									<tr key={index}>
										<td>{contract.Name}</td>
										<td>
											<a href={"/contract/" + contract.Address}>{contract.Address}</a>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default ContractOverview;
