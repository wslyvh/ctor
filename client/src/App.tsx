import React, { Component } from "react";
import { Redirect, Switch } from "react-router";
import Contracts from "./components/Contracts";
import Dashboard from "./components/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout";

class App extends Component {
	public render() {
		return (
			<Switch>
				<DefaultLayout exact path="/" component={Dashboard} title="Dashboard" />
				<DefaultLayout exact path="/contracts" component={Contracts} title="Contracts" />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default App;
