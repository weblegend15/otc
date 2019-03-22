import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { history } from '../../configureStore';
import logoIcon from '../../assets/icons/logo.svg';

import Button from '../../components/Buttons/Button';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout = () => {
    const { signout } = this.props;
    signout();
    history.push('/signin');
  };

  handleSingin = () => {
    history.push('/signin');
  };

  renderAuthNav = () => {
    return (
      <Navbar sticky="top" bg="secondary" variant="secondary" expand="md">
        <Navbar.Brand href="/">
          <img
            className="d-inline-block align-top ml-5"
            src={logoIcon}
            alt="logo"
          />
          <span className="logo-chars"> TRADE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Nav>
          <Nav>
            <Button variant="primary" onClick={this.handleLogout}>
              Log out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  renderNoAuthNav = () => {
    return (
      <Navbar
        sticky="top"
        variant="secondary"
        expand="md"
        className="topbar border-bottom border-dark p-0">
        <Navbar.Brand href="/">
          <img
            className="d-inline-block align-top ml-5"
            src={logoIcon}
            alt="logo"
          />{' '}
          <span className="logo-chars"> TRADE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="h-100 d-flex justify-content-between"
          id="basic-navbar-nav">
          <Nav className="flex-1 d-flex justify-content-between h-100">
            <NavLink
              className=" mx-auto p-3 topbar-item-active h-100 text-center d-flex align-items-center"
              to="/home">
              Home
            </NavLink>
            <NavLink
              className=" mx-auto p-3 topbar-item-active h-100 text-center d-flex align-items-center"
              to="/faq">
              FAQ
            </NavLink>
            <NavLink
              className=" mx-auto p-3 topbar-item-active h-100 text-center d-flex align-items-center"
              to="/contactus">
              Contact Us
            </NavLink>
          </Nav>
          <Nav>
            <Button variant="outline-primary" onClick={this.handleSingin}>
              SIGN IN
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  render() {
    const { currentUser } = this.props;

    return !currentUser.isAuthenticated
      ? this.renderNoAuthNav()
      : this.renderAuthNav();
  }
}

export default Topbar;
