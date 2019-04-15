import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import throttle from 'lodash/throttle';
import cx from 'classnames';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  LoadingContainer,
  Card,
  Row,
  Col,
  Input,
} from '../../../../../components';

import DesktopRow from './DesktopRow';
import MobileRow from './MobileRow';

import { checkGroupPermission } from '../../../../../utils/permission';

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: window.innerWidth,
    };

    this.handleResize = throttle(this.onResize, 500);
  }

  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      readGroupRequest,
      listMembersRequest,
    } = this.props;
    readGroupRequest(groupId);
    listMembersRequest(groupId);

    this.onResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onResize = () => {
    this.setState({
      currentWidth: window.innerWidth,
    });
  };

  handleAction = (value, userId) => {
    const {
      toggleModal,
      match: {
        params: { groupId },
      },
    } = this.props;
    toggleModal('manageUserModal', { actionType: value, groupId, userId });
  };

  handleSearchInput = () => {
    // TODO member search value here: e.target.value
  };

  renderNavTabs = () => {
    const {
      match: {
        params: { groupId, searchKey },
      },
    } = this.props;
    return (
      <Navbar className="members-search-nav p-0 border-bottom border-default-color mb-3">
        <Nav className="w-100 p-0 p-md-2 row m-0">
          <Col
            xs={12}
            md={8}
            className="pb-md-0 mb-3 px-0 mb-md-0 d-flex align-items-center"
          >
            <NavLink
              className="ml-0 ml-md-3 mr-3 py-2"
              activeClassName={cx({ 'active font-weight-bold': !searchKey })}
              to={`/app/groups/${groupId}/admin/members`}
            >
              All
            </NavLink>
            <NavLink
              className="mx-3 py-2"
              activeClassName="active font-weight-bold"
              to={`/app/groups/${groupId}/admin/members/active`}
            >
              Active
            </NavLink>
            <NavLink
              className="mx-3 py-2"
              activeClassName="active font-weight-bold"
              to={`/app/groups/${groupId}/admin/members/banned`}
            >
              Banned
            </NavLink>
          </Col>
          <Col xs={12} md={4} className="p-0 my-auto">
            <Input
              className="ml-md-auto mr-md-4"
              icon="search"
              iconPosition="right"
              placeholder="Search Members"
              onChange={this.handleSearchInput}
            />
          </Col>
        </Nav>
      </Navbar>
    );
  };

  renderTableHeader = () => {
    return (
      <Row className="border-bottom border-default-color align-items-center justify-content-center py-2 opacity-5 p-sm font-weight-semibold text-uppercase d-none d-md-flex">
        <Col className="text-center p-0" md={1}>
          Joined
        </Col>
        <Col className="text-center p-0" md={2}>
          User
        </Col>
        <Col className="text-center p-0" md={2}>
          Feadback score
        </Col>
        <Col className="text-center p-0" md={2}>
          Social profile
        </Col>
        <Col className="text-center p-0" md={1}>
          Status
        </Col>
        <Col className="text-center p-0" md={4}>
          Actions
        </Col>
      </Row>
    );
  };

  render() {
    const {
      groupMembers: { list, loading },
      match: {
        params: { groupId },
      },
    } = this.props;

    const { currentWidth } = this.state;

    const members = list.filter(
      item =>
        checkGroupPermission(item, groupId).isMember ||
        checkGroupPermission(item, groupId).isBanned,
    );

    if (!members.length) {
      return (
        <Card.Body className="p-5 text-center h3-title">No members</Card.Body>
      );
    }

    return (
      <Fragment>
        {this.renderNavTabs()}
        <Card.Body className="p-0 p-md-3">
          {this.renderTableHeader()}
          <LoadingContainer loading={loading}>
            {members.map((userData, index) => {
              return currentWidth > 767 ? (
                <DesktopRow
                  key={userData._id}
                  userData={userData}
                  index={index}
                  usersCount={members.length}
                  groupId={groupId}
                  onClick={this.handleAction}
                />
              ) : (
                <MobileRow
                  key={userData._id}
                  userData={userData}
                  groupId={groupId}
                  onClick={this.handleAction}
                />
              );
            })}
          </LoadingContainer>
        </Card.Body>
      </Fragment>
    );
  }
}
