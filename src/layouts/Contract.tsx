import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import ContractDefinition from "../components/contract/Definition";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface IRouterProps {
    address: string;
}

interface IProps extends RouteComponentProps<IRouterProps> {

}

class Home extends Component<IProps> {

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
