import { Connectors } from "web3-react";

const { InjectedConnector, NetworkOnlyConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 3, 4] });
const Infura = new NetworkOnlyConnector({
  providerURL: "https://mainnet.infura.io/v3/9a73a4bf452e4b3eb82878081d944d26"
});

const connectors = { MetaMask, Infura };

export default connectors;
