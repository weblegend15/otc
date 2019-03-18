import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import logoIcon from '../../assets/icons/logo.svg';

export default () => (
  <Navbar sticky="top" bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img className="d-inline-block align-top" src={logoIcon} alt="logo" /> {'  T  R  A  D  E'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
      </Nav>
      <Nav>
        <Button variant="primary">Profile</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
