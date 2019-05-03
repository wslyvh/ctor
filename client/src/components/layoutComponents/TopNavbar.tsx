import React, { Component } from "react";
import AccountInfo from "./AccountInfo";

class TopNavbar extends Component {
	public render() {
		return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
                    Ctor
                </a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <AccountInfo />
                    </li>
                </ul>
            </nav>
		);
	}
}

export default TopNavbar;
