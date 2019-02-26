import React, { Component } from "react";
import ContractFunction from "./Function";

interface IContractRouterProps {
    contractAddress: string;
}

class ContractDefinition extends Component<IContractRouterProps> {

    private apiKey = process.env.REACT_APP_ETHERSCAN_APIKEY;

    public state = {
        address: "",
        name: "",
        abi: {},
        constructor: {},
        constants: [],
        functions: [],
        events: [],
        contractRaw: {},
    };

    public async componentDidMount() {

        var result = await this.getContractFromEtherscan();
        var abi = JSON.parse(result.ABI);

        var ctor = {};
        var constants = [];
        var functions = [];
        var events = [];

        for (let i = 0; i < abi.length; i++) {
            const element = abi[i];

            if (element.type === "constructor") {
                ctor = element;
            }

            if (element.type === "event") {
                events.push(element);
            }

            if (element.type === "function") {

                if (element.constant) {
                    constants.push(element);
                } else {
                    functions.push(element)
                }
            }
        }

        this.setState({
            address: this.props.contractAddress,
            name: result.ContractName,
            abi: abi,
            constructor: ctor,
            constants: constants,
            functions: functions,
            events: events,
            contractRaw: result,
        });
    }

    public getContractFromEtherscan = async () => {

        const response = await fetch("https://api.etherscan.io/api?module=contract&action=getsourcecode&address=" + this.props.contractAddress + "&apikey=" + this.apiKey)
        const body = await response.json();

        if (response.status !== 200) {
            console.log(response);
            throw Error(body.message);
        }

        return body.result[0];
    }

    public render() {

        return (

            <div className="panel">
                <h3>{this.state.name}</h3>

                <div className="alert alert-secondary" role="alert">
                    <span hidden className="badge badge-primary">constructor</span> &nbsp;
                    <strong>constructor</strong> &nbsp;
                    <small>
                        _curator (address), _daoCreator (address), _proposalDeposit (uint256), _minTokensToCreate (uint256), _closingTime (uint256), _privateCreation (address)
                    </small>
                </div>

                <div>
                    <h4>Constants</h4>
                    {this.state.constants.map(function (constant: any, index: any) {
                        return <ContractFunction key={index} functionObject={constant} type="constant" />
                    })}

                    <h4>Functions</h4>
                    {this.state.functions.map(function (func: any, index: any) {
                        return <ContractFunction key={index} functionObject={func} type="function" />
                    })}

                    <h4>Events</h4>
                    {this.state.events.map(function (event: any, index: any) {
                        return <ContractFunction key={index} functionObject={event} type="event" />
                    })}
                </div>
            </div>
        );
    }
}

export default ContractDefinition;
