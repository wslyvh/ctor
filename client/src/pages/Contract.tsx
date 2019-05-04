import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import ContractContainer from "../components/contract/ContractContainer";

interface IProps {
	id: string;
}

class Contract extends Component<RouteComponentProps<IProps>> {
	public render() {
		console.log(this.props);
		return (
			<>
				<ContractContainer address={this.props.match.params.id} />
			</>
		);
	}
}

export default Contract;
