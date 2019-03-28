import React from "react";
import ReactDOM from "react-dom";
import ContractEventListener from "./ContractEventListener";

let mock: any = jest.fn();

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractEventListener contract={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
