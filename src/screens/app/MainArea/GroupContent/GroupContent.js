import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Nav, Button, Icon } from '../../../../components';

import GroupChat from './GroupChat';
import Offers from './Offers';
import VouchesProposals from './VouchesProposals';

class GroupContent extends Component {
  handleClickNewOffer = () => {
    const { toggleModal, selectedGroupId } = this.props;
    toggleModal('newOfferModal', { groupId: selectedGroupId });
  };

  renderTabs = () => {
    const {
      match: { url },
    } = this.props;
    return (
      <Nav className="w-100 d-flex justify-content-around flex-row align-items-center">
        <div className="d-none d-md-block">
          <NavLink
            className="py-3 p-lg"
            activeClassName="active font-weight-bold"
            to={`${url}/chat`}
          >
            Chat
          </NavLink>
          <NavLink
            className="py-3 mx-4 p-lg"
            activeClassName="active font-weight-bold"
            to={`${url}/offers`}
          >
            All Offers
          </NavLink>
          <NavLink
            className="py-3 mx-4 p-lg"
            activeClassName="active font-weight-bold"
            to={`${url}/vouches-proposals`}
          >
            Vouches/Proposals
          </NavLink>
        </div>
        <Button
          onClick={this.handleClickNewOffer}
          variant="outline-primary"
          className="btn-regular ml-auto my-2 text-uppercase font-weight-bold"
        >
          + New offer
        </Button>
      </Nav>
    );
  };

  renderHeader = () => {
    return (
      <div className="group-content-header border-bottom border-default-color pl-3 pr-4 pt-3">
        <div className="mb-5 p-sm d-flex flex-row align-items-center">
          <p className="text-uppercase opacity-5 mr-3">message from admin</p>
          <Icon className="text-primary" name="arrow-right" />
        </div>
        {this.renderTabs()}
      </div>
    );
  };

  renderRoutes = () => {
    const {
      match: { url },
    } = this.props;
    return (
      <Switch>
        <Route path={`${url}/chat`} component={GroupChat} />
        <Route path={`${url}/offers`} component={Offers} />
        <Route path={`${url}/vouches-proposals`} component={VouchesProposals} />
        <Redirect to={`${url}/chat`} />
      </Switch>
    );
  };

  render() {
    return (
      <div className="group-content-section">
        {this.renderHeader()}
        <div className="p-0">{this.renderRoutes()}</div>
      </div>
    );
  }
}

export default withRouter(GroupContent);
