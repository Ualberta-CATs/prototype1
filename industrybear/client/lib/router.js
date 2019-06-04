import React from 'react';
import { Router, Route, Switch } from 'react-router';
import  createBrowserHistory  from 'history/createBrowserHistory';
import {Home} from '../home/home.js';
import {Login} from '../login/login.js';
import {Connect} from '../connect/connect.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/connect" component={Connect}/>
    </Switch>
  </Router>
);
