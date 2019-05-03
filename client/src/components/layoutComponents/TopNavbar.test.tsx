import React from "react";
import ReactDOM from "react-dom";
import TopNavbar from "./TopNavbar";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TopNavbar />, div);
	ReactDOM.unmountComponentAtNode(div);
});
