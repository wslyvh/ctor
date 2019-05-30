import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";

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
