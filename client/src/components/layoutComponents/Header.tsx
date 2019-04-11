import React, { Component } from "react";
import logo from "../../assets/logo/logo_small.png";

class Header extends Component {
	public render() {
		return (
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-auto">
							<h1>
								<a href="/">
									<img alt="Ctor" src={logo} className="logo" />
								</a>
							</h1>
						</div>

						<div className="col">&nbsp;</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
