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
      <Nav className="pl-2 pl-md-4 mt-2 mt-md-4 w-100 custom-nav d-flex flex-row align-items-center border-bottom border-default-color">
        <NavLink
          className="pt-1 pt-md-3 pb-3 pb-md-4 mr-2 mr-md-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/personal-data`}
        >
          Personal Data
        </NavLink>
        <NavLink
          className="pt-1 pt-md-3 pb-3 pb-md-4 mx-2 mx-md-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/kyc`}
        >
          KYC
        </NavLink>
        <NavLink
          className="pt-1 pt-md-3 pb-3 pb-md-4 mx-2 mx-md-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/security`}
        >
          Security
        </NavLink>
        <NavLink
          className="pt-1 pt-md-3 pb-3 pb-md-4 mx-2 mx-md-4 h4-title font-black"
          activeClassName="active font-weight-bold"
          to={`${url}/notifications`}
        >
          Notifications
        </NavLink>
        <NavLink
          className="pt-1 pt-md-3 pb-3 pb-md-4 mx-2 mx-md-4 h4-title font-black"
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
        <Card className="user-settings-container px-2 pt-3 pt-md-0 px-md-0 border-0">
          {this.renderHeaderTabs()}
          <div className="user-settings-container-content">
            {this.renderRoutes()}
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(UserSettings);
