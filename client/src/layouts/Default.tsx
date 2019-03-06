import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import logo from "../assets/logo/logo.png";
import "../assets/styles/main.scss";

interface IState {
    searchValue: string;
}

class Home extends Component<RouteComponentProps, IState> {

    private recentItems = [];

    constructor(props: any) {
        super(props);

        this.state = {
            searchValue: "",
        };

        this.recentItems = this.getRecentItems();
    }

    public render() {
        return (

            <div className="home">
                <form>

                    <div className="main-logo text-center">
                        <img alt="Ctor" src={logo} />
                    </div>

                    <div className="inner-form">
                        <div className="basic-search">
                            <div className="input-field">
                                <input id="search" type="text"
                                    value={this.state.searchValue}
                                    onChange={(event) => { this.setState({ searchValue: event.target.value }); }}
                                    onKeyPress={(event) => {
                                        if (event.key === "Enter") {
                                            this.search();
                                        }
                                    }}
                                    placeholder="Search for a contract address..." />
                                <div className="icon-wrap">
                                    <svg version="1.1" xmlBase="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                                        <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="advance-search">
                            <h2>Featured</h2>
                            <div className="row">
                                <ul className="results">
                                    <li><a href="/contract/0xbb9bc244d798123fde783fcc1c72d3bb8c189413">0xbb9bc244d798123fde783fcc1c72d3bb8c189413</a> <small>The DAO</small></li>
                                    <li><a href="/contract/0x06012c8cf97bead5deae237070f9587f8e7a266d">0x06012c8cf97bead5deae237070f9587f8e7a266d</a> <small>Crypto KittyCore</small></li>
                                    <li><a href="/contract/0x851b7f3ab81bd8df354f0d7640efcd7288553419">0x851b7f3ab81bd8df354f0d7640efcd7288553419</a> <small>Gnosis Multisig wallet</small></li>
                                    <li><a href="/contract/0x06A981Bd291C6BFaaB9954dDcEEb782dE805b4b3">0x06A981Bd291C6BFaaB9954dDcEEb782dE805b4b3</a> <small>Vyper Contract</small></li>
                                    <li><a href="/contract/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2">0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2</a> <small>Maker (MKR) Token</small></li>
                                </ul>
                            </div>
                        </div>

                        <div className="advance-search" hidden>
                            <h2>Recently searched</h2>

                            <div className="row">
                                <ul className="results">

                                    {this.recentItems.map((address: any, index: any) => {
                                        return <li key={index}>
                                            <a href={"/contract/" + address}>{address}</a>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        );
    }

    public getRecentItems() {
        const recent = localStorage.getItem("recent");
        if (recent) {
            return JSON.parse(recent);
        }

        return [];
    }

    public search() {
        const recent = localStorage.getItem("recent");
        let recentItems = [];

        if (recent) {
            recentItems = JSON.parse(recent);
        }

        recentItems.push(this.state.searchValue);
        localStorage.setItem("recent", JSON.stringify(recentItems));

        this.props.history.push("/contract/" + this.state.searchValue);
        return false;
    }
}

export default Home;
