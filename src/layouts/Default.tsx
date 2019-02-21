import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends Component {

    public render() {
        return (
            <div className="App">

                <Header />

                <div className="container">
                    <p>Content</p>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;
