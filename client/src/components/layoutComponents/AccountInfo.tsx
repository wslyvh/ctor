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
			<a className="nav-link" href="/">
				{this.state.accounts[0]}
			</a>
		);
	}
}

export default AccountInfo;
