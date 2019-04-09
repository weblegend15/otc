import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { Nav } from '../../../../../components';

import ActiveDeals from './ActiveDeals';
import ActiveProposals from './ActiveProposals';
import PeopleRequestVouch from './PeopleRequestVouch';
import AcceptedVouches from './AcceptedVouches';

class VouchesProposals extends Component {
  renderTabs = () => {
    const {
      match: { url },
      proposals: { list, loading },
    } = this.props;
    return (
      <Nav className="w-100 pt-4 px-3 d-flex flex-row border-bottom border-default-color">
        <NavLink
          className="px-1 py-4 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/active-deals`}
        >
          Your Active Deals
        </NavLink>
        <NavLink
          className="px-1 py-4 mx-5 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/active-proposals`}
        >
          Your Active Proposals
        </NavLink>
        <NavLink
          className="px-1 py-4 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/people-request-vouch`}
        >
          People Requesting Your Vouch
        </NavLink>
        <NavLink
          className="px-1 py-4 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/accepted-vouches`}
        >
          Accepted Vouches
        </NavLink>
      </Nav>
    );
  };

  renderRoutes = () => {
    const {
      match: { url },
    } = this.props;
    return (
      <Switch>
        <Route path={`${url}/active-deals`} component={ActiveDeals} />
        <Route path={`${url}/active-proposals`} component={ActiveProposals} />
        <Route
          path={`${url}/people-request-vouch`}
          component={PeopleRequestVouch}
        />
        <Route path={`${url}/accepted-vouches`} component={AcceptedVouches} />
        <Redirect to={`${url}/active-deals`} />
      </Switch>
    );
  };

  render() {
    return (
      <div className="vouches-proposals-area">
        {this.renderTabs()}
        {this.renderRoutes()}
      </div>
    );
  }
}

export default withRouter(VouchesProposals);
