import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import SendConfirm from './SendConfirm';
import VerifyEmail from './VerifyEmail';
import ForgotPassword from './ForgotPassword';

const Auth = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/signin`} component={Signin} />
    <Route path={`${match.url}/signup`} component={Signup} />
    <Route path={`${match.url}/send-confirm`} component={SendConfirm} />
    <Route path={`${match.url}/verify-email`} component={VerifyEmail} />
    <Route path={`${match.url}/reset-password`} component={ForgotPassword} />
    <Redirect to={`${match.url}/signin`} />
  </Switch>
);

export default withRouter(Auth);
