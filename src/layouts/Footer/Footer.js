import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <Navbar
      className="d-flex footer flex-column"
      sticky="top"
      bg="secondary"
      variant="secondary"
      expand="md"
    >
      <Nav className="mx-auto">
        <NavLink className="mr-5 ml-5 mt-3 mb-3" to="/home">
          Home
        </NavLink>
        <NavLink className="mr-5 ml-5 mt-3 mb-3" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="mr-5 ml-5 mt-3 mb-3" to="/contactus">
          Contact Us
        </NavLink>
        <NavLink className="mr-5 ml-5 mt-3 mb-3" to="/contactus">
          Terms of Service
        </NavLink>
        <NavLink className="mr-5 ml-5 mt-3 mb-3" to="/contactus">
          Privacy Policy
        </NavLink>
      </Nav>
      <p className="mt-3">
        Copyright © 2019 <b>OTC trade.</b> All rights reserved.
      </p>
    </Navbar>
  );
};
