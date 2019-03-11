import React, { Component } from "react";
import { IContract } from "../../model/IContract";

interface IProps {
	contract: IContract;
}

class ContractView extends Component<IProps> {
	public render() {
		console.log(this.props.contract);

		return (
			<>
				<div>Contract view: {this.props.contract.Address}</div>
			</>
		);
	}
}

export default ContractView;
