import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Pagination, Timestamp } from '../../../components';
import { formatNumber } from '../../../utils/common';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageSize: 4,
    };
  }

  componentDidMount() {
    const { getProfileRequest } = this.props;
    const { pageSize } = this.state;
    getProfileRequest({ skip: 0, limit: pageSize });
  }

  handlePageChange = value => {
    const { getProfileRequest } = this.props;

    this.setState({ currentPage: value });
    getProfileRequest();
  };

  renderGroup = (group, index) => {
    const { name, description, membersCount } = group;
    return (
      <Col md={6} className="my-2">
        <Card key={`group_${index}`}>
          <Card.Body>
            <h5>{name}</h5>
            <span>{description}</span>
          </Card.Body>
          <Card.Footer>
            <span>{formatNumber(membersCount)} members</span>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  renderGroups = () => {
    const { currentPage, pageSize } = this.state;
    const { groups } = this.props;
    return (
      <Fragment>
        <Card.Body className="py-3">
          <Card.Title className="px-1" as="h5">
            Member Of
          </Card.Title>
          <Row>
            {groups
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((group, index) => this.renderGroup(group, index))}
          </Row>
        </Card.Body>
        <Card.Footer className="border-0 justify-content-end d-flex">
          {groups.length > pageSize && (
            <Pagination
              className="ml-auto mr-3"
              total={groups.length}
              perPage={pageSize}
              currentPage={currentPage}
              onChange={this.handlePageChange}
            />
          )}
        </Card.Footer>
      </Fragment>
    );
  };

  renderNoGroups = () => {
    return (
      <Card.Body className="py-3">
        <Card.Title className="px-1" as="h5">
          No Groups
        </Card.Title>
      </Card.Body>
    );
  };

  render() {
    const { profile, profileLoading } = this.props;
    const { groups } = profile;

    if (profileLoading) {
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
          <Card.Header className="p-3 border-bottom border-light bio-title">
            <Row className="px-4 py-3">
              <h5 className="mr-auto">Bio</h5>
              <span className="join-date">
                Joined{' '}
                <Timestamp
                  className="d-inline"
                  timestamp={profile.createdAt}
                  format="D MMM YYYY"
                />
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </span>
            </Row>
          </Card.Header>
          {groups.length ? this.renderGroups() : this.renderNoGroups()}
        </Card>
      </div>
    );
  }
}

export default Profile;
