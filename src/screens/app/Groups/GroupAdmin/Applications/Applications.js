import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import { LoadingContainer, Card, Row, Col } from '../../../../../components';

import { checkGroupPermission } from '../../../../../utils/permission';

import DesktopRow from './DesktopRow';
import MobileRow from './MobileRow';

export default class Applications extends Component {
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

  handleViewClick = userData => {
    const {
      toggleModal,
      match: {
        params: { groupId },
      },
    } = this.props;

    toggleModal('viewApplicationModal', {
      userData,
      groupId,
    });
  };

  renderTableHeader = () => {
    return (
      <Row className="border-bottom border-default-color py-2 p-sm font-weight-semibold text-uppercase d-none d-md-flex">
        <Col className="text-center opacity-5" md={2}>
          Received
        </Col>
        <Col className="text-center opacity-5" md={3}>
          User
        </Col>
        <Col className="text-center opacity-5" md={2}>
          Feadback score
        </Col>
        <Col className="text-center opacity-5" md={3}>
          Social profile
        </Col>
        <Col className="text-center opacity-5" md={2}>
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

    const applications = list.filter(
      item => checkGroupPermission(item, groupId).isApplied === true,
    );

    if (!applications.length) {
      return (
        <Card.Body className="p-5 text-center h3-title">
          No applications
        </Card.Body>
      );
    }

    return (
      <Card.Body className="group-admin-area-applications p-0 p-md-3">
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {applications.map((userData, index) => {
            return currentWidth > 767 ? (
              <DesktopRow
                key={index}
                userData={userData}
                index={index}
                usersCount={applications.length}
                onViewClick={this.handleViewClick}
              />
            ) : (
              <MobileRow
                key={index}
                userData={userData}
                onViewClick={this.handleViewClick}
              />
            );
          })}
        </LoadingContainer>
      </Card.Body>
    );
  }
}
