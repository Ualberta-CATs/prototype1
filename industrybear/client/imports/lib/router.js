import React from 'react';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';

import Home from '../home/home';
import Login from '../login/login';
import Connect from '../connect/connect';
import Profile from '../profile/profile';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/connect" component={Connect}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
  </Router>
);
