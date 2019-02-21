import React, { Component } from "react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

class ContractSummary extends Component {
    public render() {
        return (

            <div>
                <h2>The DAO</h2>
                <h3 className="text-muted">0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413 
                    <small><a href="https://etherscan.io/address/0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413" className="text-secondary" target="_blank"><FaExternalLinkSquareAlt /></a></small>
                </h3>
            </div>
        );
    }
}

export default ContractSummary;
