import React from "react";
import ReactDOM from "react-dom";
import ContractContainer from "./ContractContainer";

const validAddress = "0xbb9bc244d798123fde783fcc1c72d3bb8c189413";
const invalidAddress = "0x123";

it("renders without crashing with valid address", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractContainer address={validAddress} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing with invalid address", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractContainer address={invalidAddress} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
