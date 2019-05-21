import { Avatar } from "antd";
import React, { Component } from "react";
import { INetworkService } from "../../services/INetworkService";
import { NetworkService } from "../../services/NetworkService";

class AccountInfo extends Component {
	public state = {
		accounts: new Array<string>()
	};

	private networkService: INetworkService = new NetworkService();

	public async componentDidMount() {
		const accounts = await this.networkService.GetAccounts();

		this.setState({
			accounts
		});
	}

	public render() {
		return (
			<>
				{this.state.accounts[0] && (
					<div style={{ margin: "0 24px" }}>
						<small style={{ margin: "0 12px" }}>{this.state.accounts[0]}</small>
						&nbsp;
						<Avatar shape="square" icon="user" />
					</div>
				)}
			</>
		);
	}
}

export default AccountInfo;
