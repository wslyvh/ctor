import React, { Component } from "react";

class Header extends Component {
    public render() {
        return (
            <header className="header">
                <div className="container">

                    <div className="row">
                        <div className="col-auto">
                            <h1><a href="/">ctor</a></h1>
                        </div>

                        <div className="col">
                            <div className="float-right">
                                <div className="searchBox form-inline">
                                    <input type="text" className="form-control search" id="search" placeholder="Search for a contract address..." aria-label="Address" aria-describedBy="button-search" required />

                                    <div className="icon-wrap">
                                        <svg version="1.1" xmlBase="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                                            <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
                                        </svg>
                                    </div>

                                    <div className="input-group-append" hidden>
                                        <button className="btn btn-secondary" type="button" id="button-search">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    }
}

export default Header;
