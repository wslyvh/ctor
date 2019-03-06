import React, { Component } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

class Footer extends Component {
    public render() {
        return (

            <footer className="footer">
                <div className="container">
                    <small>
                        A blockchain development toolkit.
                    </small>
                    <p>
                        <small className="text-muted"><FaGithub />&nbsp; <FaTwitter />&nbsp; @wslyvh</small>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
