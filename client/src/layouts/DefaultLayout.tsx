import React, { Component } from "react";
import { Route, RouteProps } from "react-router-dom";
import "../assets/styles/default.scss";
import Header from "../components/layoutComponents/Header";
import Sidebar from "../components/layoutComponents/Sidebar";

// RouteComponentProps

interface ILayoutProps extends RouteProps {
	title: string;
}

class DefaultLayout extends Component<ILayoutProps> {
	public render() {
		return (
			<>
				<Header />

				<div className="container-fluid">
					<div className="row">
						<Sidebar />

						<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
								<h1 className="h2">{this.props.title}</h1>
							</div>

							<Route {...this.props} />
						</main>
					</div>
				</div>
			</>
		);
	}
}

export default DefaultLayout;
