import { Avatar, Typography } from "antd";
import React, { Component } from "react";
import { INetworkService } from "../../services/INetworkService";
import { NetworkService } from "../../services/NetworkService";

const { Paragraph } = Typography;

class AccountInfo extends Component {
	public state = {
		accounts: new Array<string>(),
		defaultAccount: ""
	};

	private networkService: INetworkService = new NetworkService();

	public async componentDidMount() {
		const accounts = await this.networkService.GetAccounts();

		this.setState({
			accounts,
			defaultAccount: accounts[0]
		});
	}

	public render() {
		return (
			<>
				{this.state.defaultAccount && (
					<Paragraph ellipsis>
						<small className="account-address">{this.state.defaultAccount} &nbsp;</small>
						<Avatar shape="square" icon="user" size="small" alt={this.state.defaultAccount} />
					</Paragraph>
				)}
			</>
		);
	}
}

export default AccountInfo;
