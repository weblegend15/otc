import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from '../../components';

export default () => {
  return (
    <Navbar
      variant="dark"
      expand="sm"
      bg="secondary"
      className="mobile-sidebar d-md-none p-0"
    >
      <Nav className="w-100 d-flex justify-content-around flex-row">
        <NavLink className="pb-3 px-1 font-weight-semibold" to="/app/home">
          Home
        </NavLink>
        <NavLink className="pb-3 px-1 font-weight-semibold" to="/app/groups">
          My Groups
        </NavLink>
        <NavLink className="pb-3 px-1 font-weight-semibold" to="/app/offers">
          My Offers
        </NavLink>
        <NavLink className="pb-3 px-1 font-weight-semibold" to="/app/profile">
          Profile
        </NavLink>
        <NavLink className="pb-3 px-1 font-weight-semibold" to="/app/settings">
          Settings
        </NavLink>
      </Nav>
    </Navbar>
  );
};
