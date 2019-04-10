import React, { Component } from "react";

class FeedbackButton extends Component {
	public render() {
		return (
			<div className="help-button">
				<a href="https://github.com/wslyvh/ctor/issues/new" target="_blank" type="button" className="btn btn-secondary btn-sm">
					feedback &nbsp; <span className="badge badge-light">?</span>
				</a>
			</div>
		);
	}
}

export default FeedbackButton;
