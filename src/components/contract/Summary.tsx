import React, { Component } from "react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";

class ContractSummary extends Component {
    public render() {
        return (

            <div>
                <h2>ENS-Registry</h2>
                <h3 className="text-muted">0x314159265dd8dbb310642f98f50c066173c1259b 
                    <small><a href="https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b" className="text-secondary" target="_blank"><FaExternalLinkSquareAlt /></a></small>
                </h3>
            </div>
        );
    }
}

export default ContractSummary;
