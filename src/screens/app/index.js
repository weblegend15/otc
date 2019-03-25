import React from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';

import Profile from './Profile';
import Users from './Users';
import MyGroups from './MyGroups';

const App = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/profile`} component={Profile} />
    <Route path={`${match.url}/users`} component={Users} />
    <Route path={`${match.url}/my-groups`} component={MyGroups} />
  </Switch>
);

export default withRouter(App);
