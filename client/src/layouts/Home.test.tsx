import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

const mock: any = jest.fn();

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Home match={mock} location={mock} history={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
