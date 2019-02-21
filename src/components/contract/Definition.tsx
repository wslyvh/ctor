import React, { Component } from "react";
import daoContract from "../../data/contract.json";

class ContractDefinition extends Component {

    private contract = {};

    public render() {
        return (

            <div className="panel">
                <h3>{daoContract.result[0].ContractName}</h3>
                <div>
                    {daoContract.result[0].ABI}
                </div>
            </div>
        );
    }
}

export default ContractDefinition;
