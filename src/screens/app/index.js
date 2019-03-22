import React from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';

import Profile from './Profile';
import Users from './Users';

const App = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/profile`} component={Profile} />
    <Route path={`${match.url}/users`} component={Users} />
  </Switch>
);

export default withRouter(App);
