import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from '../../components';

import GroupSelector from '../../screens/app/MainArea/GroupSelector';

export default class MainAreaMobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedGroupId } = this.props;

    return (
      <Navbar
        variant="dark"
        expand="sm"
        bg="secondary"
        className="custom-nav main-area-nav d-md-none p-0 d-flex flex-column"
      >
        <GroupSelector />
        <Nav className="w-100 d-flex justify-content-around flex-row">
          <NavLink
            className="pb-3 font-weight-semibold"
            to={`/app/my-groups/${selectedGroupId || 'none'}/group/chat`}
          >
            Chat
          </NavLink>
          <NavLink
            className="pb-3 font-weight-semibold"
            to={`/app/my-groups/${selectedGroupId || 'none'}/group/offers`}
          >
            All Offers
          </NavLink>
          <NavLink
            className="pb-3 font-weight-semibold"
            to={`/app/my-groups/${selectedGroupId ||
              'none'}/group/vouches-proposals`}
          >
            Vouches/Proposals
          </NavLink>
          <NavLink
            className="pb-3 font-weight-semibold"
            to={`/app/my-groups/${selectedGroupId || 'none'}/group/members`}
          >
            Members
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}
