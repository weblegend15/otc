import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Pagination, Timestamp } from '../../../../components';
import { formatNumber } from '../../../../utils/common';

import { PAGE_LIMIT } from '../../../../config';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    const { getProfileRequest, getGroupsRequest } = this.props;
    getProfileRequest();
    getGroupsRequest({ skip: 0, limit: PAGE_LIMIT });
  }

  handlePageChange = value => {
    const { getGroupsRequest } = this.props;
    this.setState({ currentPage: value });
    getGroupsRequest({ skip: value * PAGE_LIMIT, limit: PAGE_LIMIT });
  };

  renderGroup = (group, index) => {
    const { name, description } = group;
    return (
      <Col md={6} className="my-2">
        <Card key={`group_${index}`}>
          <Card.Body>
            <h5>{name}</h5>
            <span>{description}</span>
          </Card.Body>
          <Card.Footer>
            <span>{formatNumber(1234)} members</span>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  renderGroups = () => {
    const { currentPage } = this.state;
    const { groups } = this.props;
    console.log(groups);
    return (
      <Fragment>
        <Card.Body className="p-4">
          <Card.Title className="px-1" as="h5">
            Member Of
          </Card.Title>
          <Row>
            {groups.list
              .slice(currentPage * PAGE_LIMIT, (currentPage + 1) * PAGE_LIMIT)
              .map((group, index) => this.renderGroup(group, index))}
          </Row>
        </Card.Body>
        <Card.Footer className="border-0 justify-content-end d-flex card-footer-bg-color">
          <Pagination
            className="ml-auto mr-3"
            total={groups.length}
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
    const {
      profile: { data, loading },
    } = this.props;
    const { groups } = data;

    if (loading) {
      return <div>Loading ...</div>;
    }

    if (!groups) {
      return null;
    }

    return (
      <div className="profile">
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
                    timestamp={data.createdAt}
                    format="D MMM YYYY"
                  />
                </span>
              </Col>
            </Row>
          </Card.Header>
          {groups.length ? this.renderGroups() : this.renderNoGroups()}
        </Card>
      </div>
    );
  }
}

export default Profile;
