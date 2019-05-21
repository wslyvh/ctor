import { Alert, Icon, Table, Typography } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IContract } from "../../model/IContract";
import { ContractService } from "../../services/ContractService";
import { IContractService } from "../../services/IContractService";
import Loader from "../layoutComponents/Loader";

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
		loading: true,
		error: false,
		errorMessage: "",
		contracts: new Array<IContract>()
	};

	private contractService: IContractService;

	constructor(props: IProps) {
		super(props);

		this.contractService = new ContractService();
	}

	public async componentDidMount() {
		try {
			const contracts = await this.contractService.GetContracts(this.props.limit);

			this.setState({
				loading: false,
				error: false,
				contracts
			});
		} catch (ex) {
			this.setState({
				loading: false,
				error: false,
				errorMessage: "Unable to retrieve contracts"
			});
		}
	}

	public render() {
		return (
			<>
				{this.state.error && <Alert message="Error" description={this.state.errorMessage} type="error" showIcon />}

				{this.state.loading && <Loader />}

				{!this.state.error && !this.state.loading && <Table dataSource={this.state.contracts} columns={this.columns} rowKey={item => item.Address} />}
			</>
		);
	}
}

export default ContractOverview;
