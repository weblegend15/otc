import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import cx from 'classnames';
import { Modal, Button } from '../../components';
import { history } from '../../configureStore';
import logoIcon from '../../assets/icons/logo.svg';
import toggleButton from '../../assets/icons/toggleButtonIcon.svg';

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
      <Navbar.Collapse id="basic-navbar-nav" className="h-100 d-none d-md-block">
        <Nav className="mr-auto p-0 h-100">
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to="/app/my-groups"
          >
            My Groups
          </NavLink>
        </Nav>
        <Nav className="pr-5">
          <Link to="/auth/signin" className="w-100 pl-4 pr-4 btn btn-outline-info">
            SIGN IN
          </Link>
          <Link className="pl-4 pr-4 btn btn-outline-info" to="/app/profile">
            Profile
          </Link>
          <Link className="pl-4 pr-4 btn btn-outline-info" to="/app/setting">
            Settings
          </Link>
          <Button onClick={this.handleLogout}>SIGN OUT</Button>
        </Nav>
      </Navbar.Collapse>
    );
  };

  renderNoAuthNav = pathname => {
    return (
      <Navbar.Collapse id="basic-navbar-nav" className="h-100 d-none d-md-block">
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
          <Link
            to="/auth/signin"
            className={cx('w-100 pl-4 pr-4 btn', {
              'btn-primary': pathname !== '/home',
              'btn-outline-info': pathname === '/home',
            })}
          >
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
              <Link
                to="/auth/signin"
                className="w-100 pl-2 pr-2 btn btn-primary"
                onClick={this.hideMobileNavbar}
              >
                LOGIN
              </Link>
            </Nav>
            <Nav className="pl-1 w-50">
              <Link
                to="/auth/signup"
                className="w-100 pl-2 pr-2 btn btn-outline-primary"
                onClick={this.hideMobileNavbar}
              >
                SIGN UP
              </Link>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100 w-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/home"
                onClick={this.hideMobileNavbar}
              >
                Home
              </NavLink>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100 w-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/faq"
                onClick={this.hideMobileNavbar}
              >
                FAQ
              </NavLink>
            </Nav>
          </div>
          <div className="w-100 d-flex p-2 border-bottom border-light">
            <Nav className="p-0 h-100 w-100">
              <NavLink
                className="py-3 ml-3 mobile-navbar-item-active h-100 d-flex align-items-center"
                to="/contact-us"
                onClick={this.hideMobileNavbar}
              >
                Contact Us
              </NavLink>
            </Nav>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  render() {
    const { currentUser, location } = this.props;
    const { showNavbar } = this.state;
    const { pathname } = location;

    return (
      <Navbar
        variant="dark"
        expand="md"
        bg={pathname !== '/home' && 'secondary'}
        className="topbar py-0 px-2"
      >
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
        {!currentUser && showNavbar && this.renderNoAuthMobileNav(showNavbar)}
        {!currentUser ? this.renderNoAuthNav(pathname) : this.renderAuthNav()}
      </Navbar>
    );
  }
}

export default withRouter(Topbar);
