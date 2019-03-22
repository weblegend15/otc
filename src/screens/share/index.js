import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Terms from './Terms';
import Home from './Home';

const Share = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/faq" component={FAQ} />
    <Route exact path="/terms" component={Terms} />
    <Route exact path="/contact-us" component={ContactUs} />
  </Switch>
);

export default withRouter(Share);
