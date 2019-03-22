import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import AuthScreens from './auth';
import AppScreens from './app';
import ShareScreens from './share';

const Routes = ({ currentUser }) => (
  <Switch>
    {!currentUser.value && <Route path="/auth" component={AuthScreens} />}
    {currentUser.value && <Route path="/app" component={AppScreens} />}
    <Route path="/" component={ShareScreens} />
    <Redirect to="/home" />
  </Switch>
);

const mapStateToProps = state => ({
  currentUser: state.auth.signin.currentUser,
});

export default withRouter(connect(mapStateToProps)(Routes));
