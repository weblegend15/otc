import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <Navbar
      className="d-flex footer flex-column justify-content-center"
      bg="secondary"
    >
      <Nav className="w-100 d-flex flex-row justify-content-between">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
        <NavLink to="/terms">Terms of Service</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </Nav>
      <p className="mt-3 mb-0">
        Copyright © 2019 <b>OTC trade.</b> All rights reserved.
      </p>
    </Navbar>
  );
};
