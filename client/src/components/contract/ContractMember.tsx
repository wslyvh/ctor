import { ethers, Contract } from "ethers";
import React, { Component } from "react";
import { Collapse } from "react-bootstrap";

interface IProps {
	name: string;
	type: string;
	member: any; // TODO: ContractMember type
	contract: Contract;
	classType: string;
	badgeType: string;
}

class ContractMember extends Component<IProps> {
	private provider = ethers.getDefaultProvider();

	public static defaultProps = {
		classType: "alert property-alert alert-primary",
		badgeType: "badge badge-primary"
	};

	public state = {
		open: false
	};

	constructor(props: any) {
		super(props);

		this.onExecuteMember = this.onExecuteMember.bind(this);
	}

	public async componentDidMount() {
		// console.log(this.props.member);
	}

	public render() {
		const { open } = this.state;
		const id = "collapse-" + this.props.name;
		const noParameters = this.props.member.inputs && this.props.member.inputs.length === 0 && <small>No parameters</small>;

		return (
			<>
				<div className={this.props.classType} role="alert">
					<div onClick={() => this.setState({ open: !open })} aria-controls={id} aria-expanded={open}>
						<span className={this.props.badgeType}>{this.props.type}</span> &nbsp;
						<strong>{this.props.name}</strong>
					</div>

					<Collapse in={this.state.open}>
						<div>
							<br />

							<div className="alert alert-light" role="alert">
								<strong>Parameters</strong>
								<hr />

								{noParameters}

								{this.props.member.inputs.map((input: any, index: any) => {
									return (
										<div key={index} className="form-group row">
											<label htmlFor={"input-" + index} className="col-sm-2 col-form-label">
												{input.name} <small>({input.type})</small>
											</label>
											<div className="col-sm-10">
												<input type="text" className="form-control" id={"input-" + index} />
											</div>
										</div>
									);
								})}

								<div className="form-group row">
									<label className="col-sm-2 col-form-label" />
									<div className="col-sm-10">
										<button type="button" className="btn btn-primary btn-sm" onClick={this.onExecuteMember}>
											execute
										</button>
									</div>
								</div>
							</div>

							<div className="alert alert-light" role="alert" hidden>
								<strong>Outputs</strong>
								<hr />

								<div className="form-group row">
									<label htmlFor="amount" className="col-sm-2 col-form-label">
										amount
									</label>
								</div>
							</div>
						</div>
					</Collapse>
				</div>
			</>
		);
	}

	public onExecuteMember(e: any) {
		console.log("Executing: " + this.props.name);
		return false;
	}
}

export default ContractMember;
