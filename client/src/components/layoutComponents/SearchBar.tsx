import Search from "antd/lib/input/Search";
import React, { Component } from "react";
import { Redirect } from "react-router";

class SearchBar extends Component {
  public state = {
    redirect: ""
  };

  public setRedirect = (target: string) => {
    this.setState({
      redirect: target
    });
  };

  public renderRedirect = () => {
    if (this.state.redirect) {
      const target = this.state.redirect;
      this.setState({
        redirect: ""
      });

      return <Redirect to={"/contracts/" + target} />;
    }
  };

  public render() {
    return (
      <>
        {this.renderRedirect()}

        <Search
          size="large"
          placeholder="Enter a contract address.."
          onSearch={value => {
            this.setRedirect(value);
          }}
        />
      </>
    );
  }
}

export default SearchBar;
