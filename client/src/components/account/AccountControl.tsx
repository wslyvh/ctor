import React from "react";
import { useWeb3Context } from "web3-react";

function AccountControl() {
  const context = useWeb3Context();
  console.log(context);

  if (!context.active && !context.connector && !context.error) {
    console.log("Context ready. Unlock Component");
    return (
      <div>
        <button type="button" title="Unlock" onClick={e => context.setFirstValidConnector(["Infura"])}>
          Unlock
        </button>
      </div>
    );
  } else if (context.error || (context.connector && context.active)) {
    // && !context.account (if noAccount, with Metamask show unlock screen)
    console.log("Context active. Logout Component");
    return (
      <div>
        <p>Connector: {context.connectorName}</p>
        <p>Account Info: {context.account}</p>
        <button type="button" title="Logout" onClick={e => context.unsetConnector()}>
          Logout
        </button>
      </div>
    );
  }

  const signer = context.library.getSigner();
  console.log(signer);

  return <div />;
}

export default AccountControl;
