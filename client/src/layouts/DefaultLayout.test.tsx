import React from "react";
import ReactDOM from "react-dom";
import DefaultLayout from "./DefaultLayout";

const mock: any = jest.fn();

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<DefaultLayout title="Default Test layout" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
