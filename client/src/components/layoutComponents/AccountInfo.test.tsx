import React from "react";
import ReactDOM from "react-dom";
import AccountInfo from "./AccountInfo";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AccountInfo />, div);
	ReactDOM.unmountComponentAtNode(div);
});
