import { Contract } from "ethers";
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
	public static defaultProps = {
		classType: "alert property-alert alert-primary",
		badgeType: "badge badge-primary"
	};

	public state = {
		open: false,
		output: ""
	};

	constructor(props: any) {
		super(props);

		this.onExecuteMember = this.onExecuteMember.bind(this);
	}

	public render() {
		const { open, output } = this.state;
		const id = "collapse-" + this.props.name;

		return (
			<>
				<div className={this.props.classType} role="alert">
					<div onClick={() => this.setState({ open: !open })} aria-controls={id} aria-expanded={open}>
						<span className={this.props.badgeType}>{this.props.type}</span> &nbsp;
						<strong>{this.props.name}</strong>&nbsp;
						{this.props.member.inputs.map((input: any, index: any) => {
							return (
								<small key={index}>
									{input.name} ({input.type}) &nbsp;
								</small>
							);
						})}
					</div>

					{this.props.type !== "event" && (
						<Collapse in={this.state.open}>
							<div>
								<br />

								<div className="alert alert-light" role="alert">
									<strong>Parameters</strong>
									<hr />

									{this.props.member.inputs && this.props.member.inputs.length === 0 && <small>No parameters</small>}

									{this.props.member.inputs.map((input: any, index: any) => {
										const inputId = this.props.name + "-input-" + index;

										return (
											<div key={index} className="form-group row">
												<label htmlFor={inputId} className="col-sm-2 col-form-label">
													{input.name} <small>({input.type})</small>
												</label>
												<div className="col-sm-10">
													<input type="text" className="form-control" id={inputId} ref={inputId} />
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

								{output && (
									<div className="alert alert-light" role="alert">
										<strong>Outputs</strong>
										<hr />

										<span>{output}</span>
									</div>
								)}
							</div>
						</Collapse>
					)}
				</div>
			</>
		);
	}

	public async onExecuteMember(e: any) {
		let result;
		const args = [];

		for (let i = 0; i < this.props.member.inputs.length; i++) {
			const element = this.refs[this.props.name + "-input-" + i] as HTMLInputElement;
			args.push(element.value);
		}

		try {
			const response = await this.props.contract.functions[this.props.name](...args);
			result = response;

			if (this.props.type === "function") {
				console.log(response); // TODO: Handle TX
				result = "Transaction successfully sent.";
			} else {
				if (response._ethersType === "BigNumber" || response.length) {
					result = response.toString();
				}
			}
		} catch (ex) {
			console.log(ex);
			result = "Error executing " + this.props.name;
		}

		this.setState({
			output: result
		});

		return false;
	}
}

export default ContractMember;
