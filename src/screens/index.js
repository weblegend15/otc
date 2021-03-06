import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import AuthScreens from './auth';
import AppScreens from './app';

import { ContactUs, FAQ, Terms, Home, PrivacyPolicy } from './share';

const Routes = ({ currentUser }) => (
  <Switch>
    {!currentUser && <Route path="/auth" component={AuthScreens} />}
    {currentUser && <Route path="/app" component={AppScreens} />}

    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
    {!currentUser && <Route exact path="/" component={Home} />}
    {currentUser && <Redirect to="/app" />}
    {!currentUser && <Redirect to="/" />}
  </Switch>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default withRouter(connect(mapStateToProps)(Routes));
