import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { history } from '../../configureStore';
import logoIcon from '../../assets/icons/logo.svg';
import Button from '../../components/Button';

class Topbar extends Component {
  handleLogout = () => {
    const { signout } = this.props;
    signout();
    history.push('/auth/signin');
  };

  renderAuthNav = () => {
    return (
      <Fragment>
        <NavLink
          className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
          to="/app/my-groups"
        >
          My Groups
        </NavLink>
      </Fragment>
    );
  };

  renderNoAuthNav = () => {
    return (
      <Fragment>
        <NavLink
          className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
          to="/faq"
        >
          FAQ
        </NavLink>
        <NavLink
          className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </Fragment>
    );
  };

  render() {
    const { currentUser } = this.props;

    return (
      <Navbar
        variant="dark"
        expand="md"
        className="topbar pt-0 pb-0 pl-xs-3 pr-xs-3"
      >
        <Navbar.Brand href="/" className="h-100 d-flex align-items-center">
          <img className="ml-md-5" src={logoIcon} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="h-100">
          <Nav className="mx-auto p-0 h-100">
            <NavLink
              className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
              to="/home"
            >
              Home
            </NavLink>
            {!currentUser ? this.renderNoAuthNav() : this.renderAuthNav()}
          </Nav>
          <Nav className="pr-5">
            {!currentUser ? (
              <Link
                to="/auth/signin"
                className="w-100 pl-4 pr-4 btn btn-outline-info"
              >
                SIGN IN
              </Link>
            ) : (
              <Button onClick={this.handleLogout}>SIGN OUT</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
