import React from "react";
import ReactDOM from "react-dom";
import ContractOverview from "./ContractOverview";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContractOverview />, div);
  ReactDOM.unmountComponentAtNode(div);
});
