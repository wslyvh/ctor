import { Avatar, Typography } from "antd";
import React, { Component } from "react";
import { INetworkService } from "../../services/INetworkService";
import { NetworkService } from "../../services/NetworkService";

const { Paragraph } = Typography;

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
          <Paragraph ellipsis>
            <small style={{ margin: "0 12px" }}>{this.state.accounts[0]}</small>
            &nbsp;
            <Avatar shape="square" icon="user" />
          </Paragraph>
        )}
      </>
    );
  }
}

export default AccountInfo;
