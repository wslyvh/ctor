import React from "react";
import ReactDOM from "react-dom";
import Contracts from "./Contracts";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Contracts />, div);
	ReactDOM.unmountComponentAtNode(div);
});
