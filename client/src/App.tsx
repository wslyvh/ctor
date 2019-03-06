import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Contract from "./layouts/Contract";
import Default from "./layouts/Default";

class App extends Component {

  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Default} />
        <Route path="/contract/:address" component={Contract} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
