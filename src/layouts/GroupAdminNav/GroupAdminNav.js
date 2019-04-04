import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Row, Icon } from '../../components';

export default ({ groupData }) => {
  return (
    <Navbar
      variant="dark"
      expand="sm"
      bg="secondary"
      className="group-admin-mobile-nav d-md-none p-0 d-flex flex-column"
    >
      <Row className="mr-auto mb-4 ml-0 px-4 d-flex justify-content-center align-items-center">
        <Link to="/app/groups" className="font-weight-bold h4-title pr-3">
          <Icon name="arrow-left" />
          &nbsp;&nbsp;&nbsp;{groupData.name}
        </Link>
        <p className="opacity-5 p-sm border-left px-3">Admin</p>
      </Row>
      <Nav className="p-0 d-flex flex-row justify-content-around w-100">
        <NavLink
          className="font-weight-semibold pb-3"
          activeClassName="active font-weight-bold"
          to={`/app/groups/${groupData._id}/admin/home`}
        >
          Home
        </NavLink>
        <NavLink
          className="font-weight-semibold pb-3"
          activeClassName="active font-weight-bold"
          to={`/app/groups/${groupData._id}/admin/applications`}
        >
          Applications
        </NavLink>
        <NavLink
          className="font-weight-semibold pb-3"
          activeClassName="active font-weight-bold"
          to={`/app/groups/${groupData._id}/admin/members`}
        >
          Members
        </NavLink>
        <NavLink
          className="font-weight-semibold pb-3"
          activeClassName="active font-weight-bold"
          to={`/app/groups/${groupData._id}/admin/offers`}
        >
          Offers
        </NavLink>
        <NavLink
          className="font-weight-semibold pb-3"
          activeClassName="active font-weight-bold"
          to={`/app/groups/${groupData._id}/admin/form`}
        >
          Form
        </NavLink>
      </Nav>
    </Navbar>
  );
};
