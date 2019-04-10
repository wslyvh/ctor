import React, { Component } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

class Footer extends Component {
	public render() {
		return (
			<footer className="footer">
				<div className="container">
					<small>A smart contract management toolkit.</small>
					<p>
						<small className="text-muted">
							<a href="https://github.com/wslyvh/ctor" target="_blank" className="text-reset">
								<FaGithub />
							</a>
							&nbsp;&nbsp;
							<a href="https://twitter.com/wslyvh" target="_blank" className="text-reset">
								<FaTwitter />
							</a>
							&nbsp; @wslyvh
						</small>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
