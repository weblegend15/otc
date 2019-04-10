import React, { Component } from 'react';

import { Col, Pagination, Row } from '../../../../../components';
import { PAGE_LIMIT } from '../../../../../config';

import GroupCard from '../../../Groups/GroupsList/GroupCard';

import { checkGroupPermission } from '../../../../../utils/permission';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  handlePageChange = value => {
    this.setState({ currentPage: value });
  };

  renderGroupsList = () => {
    const { currentPage } = this.state;
    const {
      memberProfile: { data },
      groupsList,
    } = this.props;

    const userGroups = groupsList.filter(group => {
      const { isMember, isGroupAdmin } = checkGroupPermission(data, group._id);
      return isMember || isGroupAdmin;
    });

    return (
      <Row className="m-0">
        {userGroups
          .slice(currentPage * PAGE_LIMIT, (currentPage + 1) * PAGE_LIMIT)
          .map(({ _id, ...rest }, idx) => (
            <Col lg={6} key={`group_${idx}`} className="mb-4 pr-4 pl-lg-0 pb-0">
              <GroupCard {...rest} memberCount={1231} groupId={_id} />
            </Col>
          ))}
        <Col md={12} className="d-flex mb-2">
          <Pagination
            className="ml-auto"
            total={userGroups.length}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <div>
        <div className="p-5 border-bottom border-default-color">
          <p className="h4-title font-weight-bold">Bio</p>
          <p className="opacity-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="px-5 py-4">
          <p className="mb-2 font-weight-bold h4-title">Member of</p>
          {this.renderGroupsList()}
        </div>
      </div>
    );
  }
}
