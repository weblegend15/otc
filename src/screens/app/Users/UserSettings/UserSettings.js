import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { Card, Nav, Row } from '../../../../components';

import Billing from './Billing';
import KYC from './KYC';
import Notifications from './Notifications';
import PersonalData from './PersonalData';
import Security from './Security';

class UserSettings extends Component {
  renderHeaderTabs = () => {
    const {
      match: { url },
    } = this.props;
    return (
      <Nav className="pl-4 mt-4 w-100 custom-nav d-flex justify-content-start flex-row align-items-center border-bottom border-default-color">
        <NavLink
          className="pt-3 pb-4 mr-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/personal-data`}
        >
          Personal Data
        </NavLink>
        <NavLink
          className="pt-3 pb-4 mx-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/kyc`}
        >
          KYC
        </NavLink>
        <NavLink
          className="pt-3 pb-4 mx-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/security`}
        >
          Security
        </NavLink>
        <NavLink
          className="pt-3 pb-4 mx-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/notifications`}
        >
          Notifications
        </NavLink>
        <NavLink
          className="pt-3 pb-4 mx-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/billing`}
        >
          Billing
        </NavLink>
      </Nav>
    );
  };

  renderRoutes = () => {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/billing`} component={Billing} />
        <Route path={`${match.url}/kyc`} component={KYC} />
        <Route path={`${match.url}/notifications`} component={Notifications} />
        <Route path={`${match.url}/personal-data`} component={PersonalData} />
        <Route path={`${match.url}/security`} component={Security} />
        <Redirect to={`${match.url}/personal-data`} />
      </Switch>
    );
  };

  render() {
    return (
      <div>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto font-weight-semibold">User Settings</h3>
        </Row>
        <Card className="user-settings-container pt-3 pt-md-0 px-0 border-0">
          {this.renderHeaderTabs()}
          {this.renderRoutes()}
        </Card>
      </div>
    );
  }
}

export default withRouter(UserSettings);
