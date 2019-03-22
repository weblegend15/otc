import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import AuthScreens from './auth';
import AppScreens from './app';
import ShareScreens from './share';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route path="/" component={ShareScreens}>
      {!currentUser.value && <Route path="/auth" component={AuthScreens} />}
      {currentUser.value && <Route path="/app" component={AppScreens} />}
    </Route>
    <Redirect to="/not-found" render={() => <div>404 page</div>} />
  </Switch>
);

const mapStateToProps = state => ({
  currentUser: state.auth.signin.currentUser,
});

export default withRouter(connect(mapStateToProps)(Routes));
