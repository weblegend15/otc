import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import cx from 'classnames';
import {
  Modal,
  Button,
  Icon,
  OverlayTrigger,
  Popover,
  ButtonToolbar,
} from '../../components';
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
  };

  displayMobileNavbar = () => {
    this.setState({ showNavbar: true });
  };

  hideMobileNavbar = () => {
    this.setState({ showNavbar: false });
  };

  renderProfilePopover = () => (
    <Popover id="popover-profile" className="p-0">
      <ListGroup className="list-group-flush" variant="flush">
        <ListGroup.Item className="pl-4 rounded-top">
          <Link to="/app/profile" className="w-100 text-secondary">
            <Icon name="user-o" size="lg" className="text-black mr-3" />
            Profile
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="pl-4">
          <Link to="/app/setting" className="w-100 text-secondary">
            <Icon name="cog" size="lg" className="text-black mr-3" />
            Settings
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="pl-4 rounded-bottom">
          <Link
            to="/auth/signin"
            onClick={() => this.handleLogout()}
            className="w-100 text-secondary"
          >
            <Icon name="sign-out" size="lg" className="text-black mr-3" />
            Logout
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Popover>
  );

  renderMessagePopover = () => (
    <Popover id="popover-message">
      No <b className="text-danger">unread</b> messages
    </Popover>
  );

  renderAlertPopover = () => (
    <Popover id="popover-alert" className="p-0">
      <ListGroup className="list-group-flush" variant="flush">
        <ListGroup.Item className="p-2 rounded-top">
          <Link
            to="/auth/signin"
            className="w-100 text-secondary alert-notification d-flex p-2"
          >
            <Icon
              name="check"
              size="2x"
              className="text-primary mx-2 d-flex align-items-center"
            />
            <p className="m-0 pl-2 pr-4">
              Your vouch in <b>Crypto OTC Group</b> has been{' '}
              <span className="text-primary">accepted.</span>
            </p>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="p-2">
          <Link
            to="/app/setting"
            className="w-100 text-secondary alert-notification d-flex p-2"
          >
            <Icon
              name="check"
              size="2x"
              className="text-primary mx-2 d-flex align-items-center"
            />
            <p className="m-0 pl-2 pr-4">
              Your vouch in <b>Crypto OTC Group</b> has been{' '}
              <span className="text-primary">accepted.</span>
            </p>
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="p-2 rounded-bottom">
          <Link
            to="/auth/signin"
            className="w-100 text-secondary alert-notification d-flex p-2"
          >
            <Icon
              name="check"
              size="2x"
              className="text-primary mx-2 d-flex align-items-center"
            />
            <p className="m-0 pl-2 pr-4">
              Your request to join to Crypto OTC Group has been{' '}
              <span className="text-danger">denied.</span>
            </p>
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Popover>
  );

  renderAuthNav = () => {
    const { selectedGroupId } = this.props;

    return (
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="h-100 d-none d-md-block"
      >
        <Nav className="mr-auto p-0 h-100">
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to="/app/home"
          >
            Home
          </NavLink>
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to={`/app/my-groups/${selectedGroupId || 'none'}`}
          >
            My Groups
          </NavLink>
        </Nav>
        <Nav className="pr-5">
          <ButtonToolbar>
            <OverlayTrigger
              trigger="click"
              delay={2}
              placement="bottom"
              overlay={this.renderAlertPopover()}
            >
              <Button
                variant="btn-outline-link"
                className="navbar-icon-buttons"
              >
                <Icon name="bell-o" size="lg" className="text-white" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              delay={2}
              placement="bottom"
              overlay={this.renderMessagePopover()}
            >
              <Button
                variant="btn-outline-link"
                className="mx-2 navbar-icon-buttons"
              >
                <Icon name="envelope-o" size="lg" className="text-white" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger="click"
              delay={2}
              placement="bottom"
              overlay={this.renderProfilePopover()}
            >
              <Button
                variant="btn-outline-link"
                className="ml-2 navbar-icon-buttons"
              >
                <Icon name="user-circle-o" size="3x" className="text-primary" />
              </Button>
            </OverlayTrigger>
          </ButtonToolbar>
          <Icon
            name="angle-down"
            className="d-flex align-items-center text-white custom-arrow-down"
          />
        </Nav>
      </Navbar.Collapse>
    );
  };

  renderNoAuthNav = pathname => {
    return (
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="h-100 d-none d-md-block"
      >
        <Nav className="mx-auto p-0 h-100">
          <NavLink
            className="p-md-3 mx-lg-5 topbar-item-active h-100 d-flex align-items-center"
            to="/"
            exact
            activeClassName="active"
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
            className={cx('w-100 pl-4 pr-4 btn font-weight-bold p-lg', {
              'btn-primary': pathname !== '/',
              'btn-outline-info': pathname === '/',
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
                to="/"
                exact
                activeClassName="active"
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
        bg={pathname !== '/' && 'secondary'}
        className={cx('topbar py-0 px-2', {
          'border-bottom': pathname === '/',
        })}
      >
        <Navbar.Brand className="h-100 d-flex align-items-center">
          <Link to="/">
            <img className="ml-md-5 my-auto" src={logoIcon} alt="logo" />
          </Link>
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
