import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContractDefinition from "../components/contract/Definition";
import ContractSummary from "../components/contract/Summary";

class Home extends Component {

    public render() {
        return (
            <div className="App">

                <Header />

                <div className="container">
                    <ContractSummary />

                    <ContractDefinition />
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;
