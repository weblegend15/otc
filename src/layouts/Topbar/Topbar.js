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
    this.state = {

    };
  }

  handleLogout = () => {
    const { signout } = this.props;
    signout();
    history.push('/signin');
  }

  handleSingin = () => {
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
          <Button variant="outline-primary" onClick={this.handleSingin}>SIGN IN</Button>
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
        {!currentUser.isAuthenticated ? this.renderNoAuthNav() : this.renderAuthNav()}
      </Navbar>
    );
  }
}

export default Topbar;
