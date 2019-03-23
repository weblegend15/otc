import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import AuthScreens from './auth';
import AppScreens from './app';

import { ContactUs, FAQ, Terms, Home } from './share';

const Routes = ({ currentUser }) => (
  <Switch>
    {!currentUser && <Route path="/auth" component={AuthScreens} />}
    {currentUser && <Route path="/app" component={AppScreens} />}

    <Route exact path="/home" component={Home} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Redirect to="/home" />
  </Switch>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default withRouter(connect(mapStateToProps)(Routes));
