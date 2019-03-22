import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Topbar, App, Dashboard, Footer } from './layouts';

import {
  Signin,
  Signup,
  FAQ,
  ContactUs,
  Terms,
  SendConfirm,
  VerifyEmail,
} from './screens';

class MainRoutes extends Component {
  renderAuthRoutes = () => (
    <Switch>
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/contactus" component={ContactUs} />

      <Route exact path="/home" component={App} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/home" />
    </Switch>
  );

  renderNoAuthRoutes = () => (
    <Switch>
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/contactus" component={ContactUs} />

      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/send-confirm" component={SendConfirm} />
      <Route exact path="/auth/verify-email" component={VerifyEmail} />
      <Redirect to="/signin" />
    </Switch>
  );

  render() {
    const { currentUser } = this.props;

    return (
      <Fragment>
        <Topbar currentUser={currentUser} />
        <ToastContainer pauseOnFocusLoss={false} autoClose={3000} />
        <div className="content">
          {!currentUser.value
            ? this.renderNoAuthRoutes()
            : this.renderAuthRoutes()}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

MainRoutes.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.bool),
};

MainRoutes.defaultProps = {
  currentUser: {},
};

const mapStateToProps = state => ({
  currentUser: state.signin.currentUser,
});

export default withRouter(connect(mapStateToProps)(MainRoutes));
