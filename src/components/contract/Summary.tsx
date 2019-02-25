import React, { Component } from "react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

class ContractSummary extends Component {
    public render() {
        return (

            <div className="contract-summary">
                <h2>The DAO</h2>
                <h3>0xbb9bc244d798123fde783fcc1c72d3bb8c189413 
                    <small><a href="https://etherscan.io/address/0xbb9bc244d798123fde783fcc1c72d3bb8c189413" className="text-secondary" target="_blank"><FaExternalLinkSquareAlt /></a></small>
                </h3>
            </div>
        );
    }
}

export default ContractSummary;
