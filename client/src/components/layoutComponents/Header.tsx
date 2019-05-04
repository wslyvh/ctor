import React, { Component } from "react";
import logo from "../../assets/logo/logo_small.png";
import AccountInfo from "./AccountInfo";

class Header extends Component {
	public render() {
		return (
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
					<img alt="Ctor" src={logo} className="logo" height="28" />
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

export default Header;
