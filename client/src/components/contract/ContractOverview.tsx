import { Icon, Table, Typography } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IContract } from "../../model/IContract";
import { ContractService } from "../../services/ContractService";
import { IContractService } from "../../services/IContractService";

const { Paragraph } = Typography;

interface IProps {
	limit: number;
}

class ContractOverview extends Component<IProps> {
	public static defaultProps = {
		limit: 10
	};

	public columns = [
		{
			title: "Name",
			dataIndex: "Name",
			key: "Name"
		},
		{
			title: "Address",
			dataIndex: "Address",
			key: "Address",
			render: (value: string) => <Link to={"/contracts/" + value}>{value}</Link>
		},
		{
			title: "",
			dataIndex: "Address",
			key: "actions",
			render: (value: string) => {
				return (
					<>
						<Paragraph copyable={{ text: value }}>
							<a href={"https://etherscan.io/address/" + value} target="_blank" rel="noopener noreferrer">
								<Icon type="link" />
							</a>
						</Paragraph>
					</>
				);
			}
		}
	];

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
				<Table dataSource={this.state.contracts} columns={this.columns} rowKey={item => item.Address} />
			</>
		);
	}
}

export default ContractOverview;
