import { ethers } from "ethers";
import React, { Component } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { EtherscanClient } from "../../data/Etherscan/EtherscanClient";
import { IEtherscanClient } from "../../data/Etherscan/IEtherscanClient";
import { ABIResult, IEtherscanSourceCodeResult } from "../../data/Etherscan/IEtherscanTypes";
import ContractMember from "./ContractMember";
import ContractFunction from "./Function";

interface IContractRouterProps {
    contractAddress: string;
}

class ContractDefinition extends Component<IContractRouterProps> {

    public state = {
        address: "",
        name: "",
        abi: {},
        constructors: [],
        constants: [],
        functions: [],
        events: [],
        contractRaw: {},
        showMembers: ["constants", "functions", "events"],
    };

    private provider = ethers.getDefaultProvider();
    private client: IEtherscanClient = new EtherscanClient();

    constructor(props: any) {
        super(props);

        this.onFilterChecked = this.onFilterChecked.bind(this);
    }

    public async componentDidMount() {

        let contract: IEtherscanSourceCodeResult;
        const etherscanResult = await this.client.getContractSourceCode(this.props.contractAddress);

        if (etherscanResult && etherscanResult.length > 0) {
            contract = etherscanResult[0];
            if (contract.ABI === "Contract source code not verified") {
                return;
            }

            const abi: ABIResult = JSON.parse(contract.ABI);

            const ctors = [];
            const constants = [];
            const functions = [];
            const events = [];

            for (const element of abi) {
                if (element.type === "constructor") {
                    ctors.push(element);
                }

                if (element.type === "event") {
                    events.push(element);
                }

                if (element.type === "function") {

                    if (element.constant) {
                        constants.push(element);
                    } else {
                        functions.push(element);
                    }
                }
            }

            this.setState({
                address: this.props.contractAddress,
                name: contract.ContractName,
                abi,
                constructors: ctors,
                constants,
                functions,
                events,
                contractRaw: contract,
                showMembers: ["constants", "functions", "events"],
            });
        }
    }

    public onFilterChecked(e: any) {
        const currentShowMembers = this.state.showMembers;
        if (currentShowMembers.includes(e.target.value)) {
            currentShowMembers.splice(currentShowMembers.indexOf(e.target.value), 1);
        } else {
            currentShowMembers.push(e.target.value);
        }

        this.setState({
            showMembers: currentShowMembers,
        });
    }

    public render() {

        let notFound;
        let contractDetails = <div><br /></div>;
        let constantMembers;
        let functionMembers;
        let eventMembers;

        if (this.state.showMembers.includes("constants")) {
            constantMembers = <div>
                <h4>Constants</h4>
                {this.state.constants.map((member: any, index: any) => {
                    return <ContractMember key={index} member={member} name={member.name} type="constant" classType="alert alert-primary" badgeType="badge badge-primary" />;
                })}
            </div>;
        }

        if (this.state.showMembers.includes("functions")) {

            functionMembers = <div>
                <h4>Functions</h4>
                {this.state.functions.map((member: any, index: any) => {
                    return <ContractMember key={index} member={member} name={member.name} type={member.type} classType="alert alert-success" badgeType="badge badge-success" />;
                })}
            </div>;
        }

        if (this.state.showMembers.includes("events")) {
            eventMembers = <div>
                <h4>Events</h4>
                {this.state.events.map((member: any, index: any) => {
                    return <ContractMember key={index} member={member} name={member.name} type={member.type} classType="alert alert-warning" badgeType="badge badge-warning" />;
                })}
            </div>;
        }

        if (this.state.name === "") {
            notFound = <div className="contract-summary text-center">
                <h3>Contract not found.</h3>
            </div>;
        } else {
            contractDetails = <div>

                <div className="contract-summary">
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.address}
                        <small><a href={"https://etherscan.io/address/" + this.state.address} className="text-secondary" target="_blank"><FaExternalLinkSquareAlt /></a></small>
                    </h3>
                </div>

                <div className="panel">
                    <h3>{this.state.name}</h3>
                    <br />

                    <div className="text-center">
                        <div className="form-check form-check-inline badge badge-primary checked-badge">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="constants"
                                onChange={this.onFilterChecked}
                                checked={this.state.showMembers.includes("constants")} />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">constants</label>
                        </div>
                        <div className="form-check form-check-inline badge badge-success checked-badge">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="functions"
                                onChange={this.onFilterChecked}
                                checked={this.state.showMembers.includes("functions")} />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">functions</label>
                        </div>
                        <div className="form-check form-check-inline badge badge-warning checked-badge">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="events"
                                onChange={this.onFilterChecked}
                                checked={this.state.showMembers.includes("events")} />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">events</label>
                        </div>
                        <br /><br />
                    </div>

                    {
                        this.state.constructors.map((ctor: any, index: any) => {
                            return <ContractFunction key={index} functionObject={ctor} type="constructor" />;
                        })
                    }

                    <div>
                        {constantMembers}

                        {functionMembers}

                        {eventMembers}
                    </div>
                </div>
            </div>;
        }

        return (

            <div>
                {notFound}
                {contractDetails}
            </div>
        );
    }
}

export default ContractDefinition;
