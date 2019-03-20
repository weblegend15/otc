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
    history.push('/signin');
  }

  renderAuthNav = () => {
    return (
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
          <Button variant="primary" onClick={this.handleLogout}>Log out</Button>
        </Nav>
      </Navbar.Collapse>
    );
  }

  renderNoAuthNav = () => {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/faq">
            FAQ
          </NavLink>
          <NavLink to="/contactus">
            Contact Us
          </NavLink>
        </Nav>
        <Nav>
          <Link to="/signin" className="btn btn-outline-primary">SIGN IN</Link>
        </Nav>
      </Navbar.Collapse>
    );
  }

  render() {
    const { currentUser } = this.props;

    return (
      <Navbar sticky="top" bg="secondary" variant="secondary" expand="md">
        <Navbar.Brand href="#">
          <img className="d-inline-block align-top" src={logoIcon} alt="logo" /> {'  T  R  A  D  E'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {!currentUser.value ? this.renderNoAuthNav() : this.renderAuthNav()}
      </Navbar>
    );
  }
}

export default Topbar;
