import React, { Component } from 'react';
import { NavLink, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { Nav, Button, Icon } from '../../../../components';

import GroupChat from './GroupChat';
import Offers from './Offers';
import Vouches from './Vouches';

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
        <NavLink
          className="px-1 py-3 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/chat`}
        >
          Chat
        </NavLink>
        <NavLink
          className="px-1 py-3 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/offers`}
        >
          All Offers
        </NavLink>
        <NavLink
          className="px-1 py-3 mx-3 p-lg"
          activeClassName="active font-weight-bold"
          to={`${url}/vouches`}
        >
          Vouches/Proposals
        </NavLink>
        <Button
          onClick={this.handleClickNewOffer}
          variant="outline-primary"
          className="ml-auto my-2 text-uppercase font-weight-bold"
        >
          + New offer
        </Button>
      </Nav>
    );
  };

  renderHeader = () => {
    return (
      <div className="border-bottom border-default-color px-3 pt-3">
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
        <Route path={`${url}/vouches`} component={Vouches} />
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
