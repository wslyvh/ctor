import React, { Component } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IContract } from "../../model/IContract";

interface IProps {
	contract: IContract;
}

class ContractView extends Component<IProps> {
	public state = {
		showMembers: ["constants", "functions", "events"]
	};

	constructor(props: any) {
		super(props);

		this.onFilterChecked = this.onFilterChecked.bind(this);
	}

	public async componentDidMount() {
		this.setState({
			showMembers: ["constants", "functions", "events"]
		});
	}

	public render() {
		if (!this.props.contract.ABI) {
			return <br />;
		}

		console.log("Contract found!");

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
								<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="constants" />
								<label className="form-check-label" htmlFor="inlineCheckbox1">
									constants
								</label>
							</div>
							<div className="form-check form-check-inline badge badge-success checked-badge">
								<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="functions" />
								<label className="form-check-label" htmlFor="inlineCheckbox2">
									functions
								</label>
							</div>
							<div className="form-check form-check-inline badge badge-warning checked-badge">
								<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="events" />
								<label className="form-check-label" htmlFor="inlineCheckbox3">
									events
								</label>
							</div>
							<br />
							<br />
						</div>

						{/* 
                                {this.state.constructors.map((ctor: any, index: any) => {
                                    return <ContractFunction key={index} functionObject={ctor} type="constructor" />;
                                })}

                                <div>
                                    {constantMembers}

                                    {functionMembers}

                                    {eventMembers}
                                </div>
                            */}
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
