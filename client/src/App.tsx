import React, { Component } from "react";
import { Redirect, Switch } from "react-router";
import Main from "./layouts/Main";
import Contract from "./pages/Contract";
import Contracts from "./pages/Contracts";
import Dashboard from "./pages/Dashboard";

class App extends Component {
	public render() {
		return (
			<Switch>
				<Main exact path="/" component={Dashboard} title="Dashboard" />
				<Main exact path="/contracts" component={Contracts} title="Contracts" />
				<Main exact path="/contracts/:id" component={Contract} title="Contracts" />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default App;
