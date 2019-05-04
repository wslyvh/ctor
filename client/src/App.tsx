import React, { Component } from "react";
import { Redirect, Switch } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Contract from "./pages/Contract";
import Contracts from "./pages/Contracts";
import Dashboard from "./pages/Dashboard";

class App extends Component {
	public render() {
		return (
			<Switch>
				<DefaultLayout exact path="/" component={Dashboard} title="Dashboard" />
				<DefaultLayout exact path="/contracts" component={Contracts} title="Contracts" />
				<DefaultLayout exact path="/contracts/:id" component={Contract} title="Contracts" />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default App;
