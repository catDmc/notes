

import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from "./page/home";
import detail from "./page/detail";

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/detail" component={detail} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
