import React, { Component } from "react";
import { Button, Collapse } from "react-bootstrap";

interface IProps {
    name: string;
    type: string;
    classType: string;
    badgeType: string;
}

class ContractMember extends Component<IProps> {

    public state = {
        open: false
    };

    static defaultProps = {
        classType: "alert property-alert alert-primary",
        badgeType: "badge badge-primary"
    }

    render() {
        const { open } = this.state;
        const id = "collapse-" + this.props.name;

        return (
            <>
                <div className={this.props.classType} role="alert">

                    <div onClick={() => this.setState({ open: !open })} aria-controls={id} aria-expanded={open}>
                        <span className={this.props.badgeType}>{this.props.type}</span> &nbsp;
                        <strong>{this.props.name}</strong>
                    </div>

                    <Collapse in={this.state.open}>
                        <div>
                            <br />

                            <div className="alert alert-light" role="alert">
                                <strong>Parameters</strong>
                                <hr />

                                <div className="form-group row">
                                    <label htmlFor="amount" className="col-sm-2 col-form-label">amount</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control-plaintext" id="amount" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label"></label>
                                    <div className="col-sm-10">
                                        <button type="button" className="btn btn-primary btn-sm">execute</button>
                                    </div>
                                </div>
                            </div>

                            <div className="alert alert-light" role="alert">
                                <strong>Outputs</strong>
                                <hr />

                                <div className="form-group row">
                                    <label htmlFor="amount" className="col-sm-2 col-form-label">amount</label>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>

            </>
        );
    }
}

export default ContractMember;
