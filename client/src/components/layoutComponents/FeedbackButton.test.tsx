import React from "react";
import ReactDOM from "react-dom";
import FeedbackButton from "./FeedbackButton";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<FeedbackButton />, div);
	ReactDOM.unmountComponentAtNode(div);
});
