import React from "react";
import ReactDOM from "react-dom";
import ContractView from "./ContractView";

let mock: any = jest.fn();

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractView contract={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
