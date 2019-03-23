import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { history } from '../../configureStore';
import logoIcon from '../../assets/icons/logo.svg';

import Button from '../../components/Buttons/Button';

class Topbar extends Component {
  handleLogout = () => {
    const { signout } = this.props;
    signout();
    history.push('/auth/signin');
  };

  renderAuthNav = () => {
    return (
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
    );
  };

  renderNoAuthNav = () => {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto p-0 h-100">
          <NavLink
            className="p-3 mr-5 ml-5 topbar-item-active h-100 d-flex align-items-center"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="p-3 mr-5 ml-5 topbar-item-active h-100 d-flex align-items-center"
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            className="p-3 mr-5 ml-5 topbar-item-active h-100 d-flex align-items-center"
            to="/contactus"
          >
            Contact Us
          </NavLink>
        </Nav>
        <Nav className="pr-5">
          <Link to="/auth/signin" className="w-100 pl-4 pr-4 btn btn-outline-info">
            SIGN IN
          </Link>
        </Nav>
      </Navbar.Collapse>
    );
  };

  render() {
    const { currentUser } = this.props;

    return (
      <Navbar
        variant="secondary"
        expand="md"
        className="topbar border-bottom border-dark p-0"
      >
        <Navbar.Brand href="/">
          <img className="ml-md-5" src={logoIcon} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {!currentUser ? this.renderNoAuthNav() : this.renderAuthNav()}
      </Navbar>
    );
  }
}

export default Topbar;
