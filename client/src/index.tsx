import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Web3Provider from "web3-react";
import App from "./App";
import connectors from "./providers/web3Provider";

ReactDOM.render(
  <Web3Provider connectors={connectors} libraryName={"ethers.js"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Web3Provider>,
  document.getElementById("root")
);
