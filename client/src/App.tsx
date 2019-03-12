import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Default from "./layouts/Default";
import Home from "./layouts/Home";

class App extends Component {
	public render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/contract/:address" component={Default} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

export default App;
