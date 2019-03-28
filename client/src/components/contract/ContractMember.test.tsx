import React from "react";
import ReactDOM from "react-dom";
import ContractMember from "./ContractMember";

let mock: any = jest.fn();
let member = {
	...mock,
	inputs: {
		map: jest.fn()
	}
};

it("renders without crashing, with constant member", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractMember member={member} name="supply" type="constant" contract={mock} classType="alert alert-primary" badgeType="badge badge-primary" />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing, with function member", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractMember member={member} name="transfer" type="function" contract={mock} classType="alert alert-success" badgeType="badge badge-success" />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing, with event member", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ContractMember member={member} name="transferred" type="event" contract={mock} classType="alert alert-warning" badgeType="badge badge-warning" />, div);
	ReactDOM.unmountComponentAtNode(div);
});
