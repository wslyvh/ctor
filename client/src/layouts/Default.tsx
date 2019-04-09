import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import ContractContainer from "../components/contract/ContractContainer";
import FeedbackButton from "../components/layoutComponents/FeedbackButton";
import Footer from "../components/layoutComponents/Footer";
import Header from "../components/layoutComponents/Header";

interface IRouterProps {
	address: string;
}

interface IProps extends RouteComponentProps<IRouterProps> {}

class Default extends Component<IProps> {
	public render() {
		return (
			<div className="App">
				<Header />

				<div className="container">
					<ContractContainer address={this.props.match.params.address} />
				</div>

				<FeedbackButton />

				<Footer />
			</div>
		);
	}
}

export default Default;
