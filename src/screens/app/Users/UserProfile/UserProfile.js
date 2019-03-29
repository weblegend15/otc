import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Pagination, Timestamp, LoadingContainer } from '../../../../components';
import GroupCard from '../../Groups/GroupsList/GroupCard';

import { PAGE_LIMIT } from '../../../../config';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    const { getGroupsRequest } = this.props;
    getGroupsRequest({ skip: 0, limit: PAGE_LIMIT });
  }

  handlePageChange = value => {
    const { getGroupsRequest } = this.props;
    this.setState({ currentPage: value });
    getGroupsRequest({ skip: value * PAGE_LIMIT, limit: PAGE_LIMIT });
  };

  renderGroups = () => {
    const { currentPage } = this.state;
    const { groups } = this.props;

    return (
      <Fragment>
        <Card.Body className="p-4">
          <Card.Title className="px-1" as="h5">
            Member Of
          </Card.Title>
          <Row>
            {groups.list.map(({ _id, ...rest }, idx) => (
              <Col md={6} key={`group_${idx}`}>
                <GroupCard {...rest} memberCount={1231} groupId={_id} />
              </Col>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer className="pt-0 border-0 justify-content-end d-flex card-footer-bg-color">
          <Pagination
            className="ml-auto mr-3"
            total={groups.total}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Card.Footer>
      </Fragment>
    );
  };

  renderNoGroups = () => {
    return (
      <Card.Body className="p-4">
        <Card.Title className="px-1" as="h5">
          No Groups
        </Card.Title>
      </Card.Body>
    );
  };

  render() {
    const { groups, currentUser } = this.props;
    return (
      <LoadingContainer loading={groups.loading} className="profile">
        <Row className="mb-3 mx-2">
          <h3 className="mr-auto">User Profile</h3>
          <Link
            to="/app/setting"
            className="btn btn-primary px-5 d-flex align-items-center"
          >
            EDIT
          </Link>
        </Row>
        <Card>
          <Card.Header className="border-bottom border-light bio-title p-4">
            <Row>
              <Col md={10}>
                <h5 className="mr-auto">Bio</h5>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </span>
              </Col>
              <Col md={2}>
                <span className="join-date">
                  Joined{' '}
                  <Timestamp
                    className="d-inline"
                    timestamp={currentUser.createdAt}
                    format="D MMM YYYY"
                  />
                </span>
              </Col>
            </Row>
          </Card.Header>
          {groups.total ? this.renderGroups() : this.renderNoGroups()}
        </Card>
      </LoadingContainer>
    );
  }
}

export default Profile;
