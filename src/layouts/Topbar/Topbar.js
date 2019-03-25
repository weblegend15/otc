import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import { history } from '../../configureStore';
import logoIcon from '../../assets/icons/logo.svg';
import Button from '../../components/Button';
import toggleButton from '../../assets/icons/toggleButton.svg';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false,
    };
  }

  handleLogout = () => {
    const { signout } = this.props;
    signout();
    history.push('/auth/signin');
  };

  displayMobileNavbar = () => {
    this.setState({ showNavbar: true });
  };

  hideMobileNavbar = () => {
    this.setState({ showNavbar: false });
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
      <Navbar.Collapse id="basic-navbar-nav d-none d-md-block" className="h-100">
        <Nav className="mx-auto p-0 h-100">
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to="/home"
          >
            Home
          </NavLink>
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
        </Nav>
        <Nav className="pr-5">
          <Link to="/auth/signin" className="w-100 pl-4 pr-4 btn btn-outline-info">
            SIGN IN
          </Link>
        </Nav>
      </Navbar.Collapse>
    );
  };

  renderNoAuthMobileNav = showNavbar => {
    return (
      <Modal
        show={showNavbar}
        onHide={this.hideMobileNavbar}
        size="sm"
        centered={false}
        dialogClassName="mobile-navbar mr-0 mt-0"
        aria-labelledby="navbar-modal-styling-title"
      >
        <Modal.Body className="p-0">
          <div className="w-100 d-flex p-2 border-bottom border-dark navbar-buttons">
            <Nav className="pr-1 w-50">
              <Link to="/auth/signin" className="w-100 pl-2 pr-2 btn btn-primary">
                LOGIN
              </Link>
            </Nav>
            <Nav className="pl-1 w-50">
              <Link to="/auth/signup" className="w-100 pl-2 pr-2 btn btn-outline-primary">
                SIGN UP
              </Link>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/home"
              >
                Home
              </NavLink>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/faq"
              >
                FAQ
              </NavLink>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </Nav>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  renderAuthMobileNav = () => {
    console.log(123);
  };

  render() {
    const { currentUser } = this.props;
    const { showNavbar } = this.state;

    return (
      <Navbar variant="dark" expand="md" className="topbar py-0 pl-2 pr-2">
        <Navbar.Brand href="/" className="h-100 d-flex align-items-center">
          <img className="ml-md-5" src={logoIcon} alt="logo" />
        </Navbar.Brand>
        <Button
          className="d-md-none"
          variant="btn-outlint-light"
          onClick={() => this.displayMobileNavbar()}
        >
          <img src={toggleButton} alt="toggle-button" />
        </Button>
        {!currentUser ? this.renderNoAuthNav() : this.renderAuthNav()}
        {!currentUser && showNavbar
          ? this.renderNoAuthMobileNav(showNavbar)
          : this.renderAuthMobileNav()}
      </Navbar>
    );
  }
}

export default Topbar;
