import React, { Component } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { EtherscanClient } from "../../data/Etherscan/EtherscanClient";
import { IEtherscanClient } from "../../data/Etherscan/IEtherscanClient";
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
    };

    private client: IEtherscanClient = new EtherscanClient();

    public async componentDidMount() {

        const result = await this.client.getContractSourceCode(this.props.contractAddress);

        if (result.ABI === "Contract source code not verified") {
            return;
        }

        const abi = JSON.parse(result.ABI);
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
            name: result.ContractName,
            abi,
            constructors: ctors,
            constants,
            functions,
            events,
            contractRaw: result,
        });
    }

    public render() {

        return (

            <div>
                <div className="contract-summary">
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.address}
                        <small><a href={"https://etherscan.io/address/" + this.state.address} className="text-secondary" target="_blank"><FaExternalLinkSquareAlt /></a></small>
                    </h3>
                </div>

                <div className="panel">
                    <h3>{this.state.name}</h3>
                    {this.state.constructors.map((ctor: any, index: any) => {
                        return <ContractFunction key={index} functionObject={ctor} type="constructor" />;
                    })}

                    <div>
                        <h4>Constants</h4>
                        {this.state.constants.map((constant: any, index: any) => {
                            return <ContractFunction key={index} functionObject={constant} type="constant" />;
                        })}

                        <h4>Functions</h4>
                        {this.state.functions.map((func: any, index: any) => {
                            return <ContractFunction key={index} functionObject={func} type="function" />;
                        })}

                        <h4>Events</h4>
                        {this.state.events.map((event: any, index: any) => {
                            return <ContractFunction key={index} functionObject={event} type="event" />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContractDefinition;
