import React from "react";
import ReactDOM from "react-dom";
import Default from "./Default";

const mock: any = jest.fn();
const validAddress = "0xbb9bc244d798123fde783fcc1c72d3bb8c189413";
const invalidAddress = "0x123";

it("renders without crashing with valid address", () => {
	let match = mock;
	match = {
		...match,
		params: {
			address: validAddress
		}
	};

	const div = document.createElement("div");
	ReactDOM.render(<Default match={match} location={mock} history={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing with invalid address", () => {
	let match = mock;
	match = {
		...match,
		params: {
			address: invalidAddress
		}
	};
	const div = document.createElement("div");
	ReactDOM.render(<Default match={match} location={mock} history={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
