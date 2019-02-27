import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContractDefinition from "../components/contract/Definition";
import { RouteComponentProps } from "react-router";

interface IContractRouterProps {
    address: string;
}

interface IContractProps extends RouteComponentProps<IContractRouterProps> {
}

// get contract from ES

class Home extends Component<IContractProps> {

    public render() {
        return (
            <div className="App">

                <Header />

                <div className="container">
                    <ContractDefinition contractAddress={this.props.match.params.address} />
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;
