import { Contract, ethers } from "ethers";
import React, { Component } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IContract } from "../../model/IContract";
import ContractMember from "./ContractMember";

interface IProps {
	contract: IContract;
}

class ContractView extends Component<IProps> {
	public state = {
		showMembers: ["constants", "functions", "events"],
		contract: Contract,
		constants: [],
		functions: [],
		events: []
	};
	private etherContract!: ethers.Contract;

	constructor(props: any) {
		super(props);

		this.onFilterChecked = this.onFilterChecked.bind(this);
	}

	public async componentWillReceiveProps(props: any) {
		this.setContractMembers(props);
	}

	public async setContractMembers(nextProps: any) {
		if (nextProps.contract && nextProps.contract.RawContract) {
			this.etherContract = nextProps.contract.RawContract;

			const constants = this.etherContract.interface.abi.filter((member: any) => member.constant === true);
			const functions = this.etherContract.interface.abi.filter((member: any) => member.constant === false);
			const events = this.etherContract.interface.abi.filter((member: any) => member.type === "event");

			this.setState({
				contract: this.etherContract,
				constants,
				functions,
				events
			});
		}
	}

	public render() {
		if (this.props.contract && !this.props.contract.ABI) {
			return <br />;
		}

		return (
			<>
				<div>
					<div className="contract-summary">
						<h2>{this.props.contract.Name}</h2>
						<h3>
							{this.props.contract.Address}
							<small>
								<a href={"https://etherscan.io/address/" + this.props.contract.Address} className="text-secondary" target="_blank">
									<FaExternalLinkSquareAlt />
								</a>
							</small>
						</h3>
					</div>

					<div className="panel">
						<div className="text-center">
							<div className="form-check form-check-inline badge badge-primary checked-badge">
								<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="constants" onChange={this.onFilterChecked} checked={this.state.showMembers.includes("constants")} />
								<label className="form-check-label" htmlFor="inlineCheckbox1">
									constants
								</label>
							</div>
							<div className="form-check form-check-inline badge badge-success checked-badge">
								<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="functions" onChange={this.onFilterChecked} checked={this.state.showMembers.includes("functions")} />
								<label className="form-check-label" htmlFor="inlineCheckbox2">
									functions
								</label>
							</div>
							<div className="form-check form-check-inline badge badge-warning checked-badge">
								<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="events" onChange={this.onFilterChecked} checked={this.state.showMembers.includes("events")} />
								<label className="form-check-label" htmlFor="inlineCheckbox3">
									events
								</label>
							</div>
							<br />
							<br />
						</div>

						{this.state.showMembers.includes("constants") && (
							<div>
								<h4>Constants</h4>
								{this.state.constants.map((member: any, index: any) => {
									return <ContractMember key={index} member={member} name={member.name} type="constant" contract={this.etherContract} classType="alert alert-primary" badgeType="badge badge-primary" />;
								})}
							</div>
						)}

						{this.state.showMembers.includes("functions") && (
							<div>
								<h4>Functions</h4>
								{this.state.functions.map((member: any, index: any) => {
									return <ContractMember key={index} member={member} name={member.name} type={member.type} contract={this.etherContract} classType="alert alert-success" badgeType="badge badge-success" />;
								})}
							</div>
						)}

						{this.state.showMembers.includes("events") && (
							<div>
								<h4>Events</h4>
								{this.state.events.map((member: any, index: any) => {
									return <ContractMember key={index} member={member} name={member.name} type={member.type} contract={this.etherContract} classType="alert alert-warning" badgeType="badge badge-warning" />;
								})}
							</div>
						)}
					</div>
				</div>
			</>
		);
	}

	public onFilterChecked(e: any) {
		const currentShowMembers = this.state.showMembers;
		if (currentShowMembers.includes(e.target.value)) {
			currentShowMembers.splice(currentShowMembers.indexOf(e.target.value), 1);
		} else {
			currentShowMembers.push(e.target.value);
		}

		this.setState({
			showMembers: currentShowMembers
		});
	}
}

export default ContractView;
