import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Topbar, App, Dashboard  } from './layouts';

const MainRoutes = () => (
  <div>
    <Topbar />
    <Switch>
      <Route path="/home" component={App} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default withRouter(MainRoutes);