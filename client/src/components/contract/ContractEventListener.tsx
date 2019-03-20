import { Contract, ethers } from "ethers";
import React, { Component } from "react";
import { Alert } from "react-bootstrap";

interface IEventLog {
	signature: string;
	arguments: string;
	block: string;
	tx: string;
}

interface IProps {
	contract: Contract;
}

class ContractEventListener extends Component<IProps> {
	public state = {
		logs: Array<IEventLog>()
	};

	private etherContract!: ethers.Contract;

	public async componentDidMount() {
		this.setEventProps(this.props);
	}

	public async componentWillReceiveProps(props: any) {
		this.setEventProps(props);
	}

	public async setEventProps(nextProps: any) {
		if (nextProps.contract) {
			this.etherContract = nextProps.contract;

			const subs = this.etherContract.interface.abi
				.filter((member: any) => member.type === "event")
				.map((event: any) => {
					return event.name;
				});

			this.listenToEvents(subs);
		}
	}

	public render() {
		return (
			<div>
				<h4>Logs</h4>
				<Alert variant="dark" className="console-log">
					Monitor the latest <strong>event logs</strong> of the contract's actions and events... <br />
					<hr />
					{this.state.logs.map((log: IEventLog, index: any) => {
						return (
							<div key={index}>
								<strong>{log.signature}</strong>
								<i> block #{log.block} </i>
								<small>{log.arguments}</small>
							</div>
						);
					})}
				</Alert>
			</div>
		);
	}

	public listenToEvents(events: any) {
		events.forEach((event: any) => {
			this.etherContract.on(event, (...args) => {
				let result = "";
				const tx = args[args.length - 1];
				for (let i = 0; i < args.length - 1; i++) {
					const element = args[i];
					result += element.toString();

					if (i < args.length - 2) result += ", ";
				}

				const eventLog = {
					signature: tx.eventSignature,
					arguments: result,
					block: tx.blockNumber,
					tx: tx.transactionHash
				} as IEventLog;

				const logs = this.state.logs;
				logs.push(eventLog);
				this.setState({
					logs: logs
				});
			});
		});
	}
}

export default ContractEventListener;
