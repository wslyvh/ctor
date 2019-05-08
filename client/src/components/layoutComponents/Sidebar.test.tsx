import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import { BrowserRouter, Switch } from "react-router-dom";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<Switch>
				<Sidebar />
			</Switch>
		</BrowserRouter>, div);
	ReactDOM.unmountComponentAtNode(div);
});
