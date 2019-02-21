import React, { Component } from "react";

class Header extends Component {
    public render() {
        return (
            <header className="header">
                <div className="container">

                    <div className="row">
                        <div className="col-auto">
                            <h1>Ctor</h1>
                        </div>

                        <div className="col">
                            <div className="float-right">
                                <div className="searchBox form-inline">
                                    <input type="text" className="form-control search" id="search" placeholder="Contract address..." aria-label="Address" aria-describedBy="button-search" required />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button" id="button-search">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
