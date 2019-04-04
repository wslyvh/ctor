import React, { Component } from "react";
import "../../assets/styles/loader.scss";

class Loader extends Component {
	public render() {
		return (
			<div className="loading-wrapper text-center">
				<div className="donut-loader" />
			</div>
		);
	}
}

export default Loader;
