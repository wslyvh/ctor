import React, { Component } from "react";
import daoContract from "../../data/contract.json";

class ContractDefinition extends Component {

    private contract = {};

    public render() {
        var abi = JSON.parse(daoContract.result[0].ABI);
        console.log(abi);

        return (

            <div className="panel">
                <h3>{daoContract.result[0].ContractName}</h3>

                <div className="alert alert-secondary" role="alert">
                    <span hidden className="badge badge-primary">constructor</span> &nbsp;
                    <strong>constructor</strong> &nbsp;
                    <small>
                        _curator (address), _daoCreator (address), _proposalDeposit (uint256), _minTokensToCreate (uint256), _closingTime (uint256), _privateCreation (address)
                    </small>
                </div>

                <div>
                    <h4>Constants</h4>
                    <div className="alert alert-primary" role="alert">
                        <span className="badge badge-primary">constant</span> &nbsp;
                        <strong>rewardAccount</strong> <small>(address)</small>
                    </div>
                    <div className="alert alert-primary" role="alert">
                        <span className="badge badge-primary">constant</span> &nbsp;
                        <strong>minTokensToCreate</strong> <small>(uint256)</small>
                    </div>
                    <div className="alert alert-primary" role="alert">
                        <span className="badge badge-primary">constant</span> &nbsp;
                        <strong>proposals</strong> <small>(uint256)</small>
                    </div>
                    <div className="alert alert-primary" role="alert">
                        <span className="badge badge-primary">constant</span> &nbsp;
                        <strong>checkProposalCode</strong> <small>_proposalID (uint256), _recipient (address), _amount (uint256), _transactionData (bytes)</small>
                    </div>

                    <h4>Functions</h4>
                    <div className="alert alert-success" role="alert">
                        <span className="badge badge-success">function</span> &nbsp;
                        <strong>transfer</strong> <small>_to, (address), _value (uint256)</small>
                    </div>
                    <div className="alert alert-success" role="alert">
                        <span className="badge badge-success">function</span> &nbsp;
                        <strong>newProposal</strong> <small>_recipient (address), _amount (uint256), _description (string), _transactionData (bytes), _debatingPeriod (uint256), _newCurator (bool)</small>
                    </div>

                    <h4>Events</h4>
                    <div className="alert alert-warning" role="alert">
                        <span className="badge badge-warning">event</span> &nbsp;
                        <strong>AllowedRecipientChanged</strong> <small>_recipient (address), _allowed (bool)</small> &nbsp;
                        <span className="badge badge-light float-right">
                            <a href="#" className="text-muted">subscribe</a>
                        </span>
                    </div>
                </div>
                <div hidden>
                    {daoContract.result[0].ABI}
                </div>
            </div>
        );
    }
}

export default ContractDefinition;
