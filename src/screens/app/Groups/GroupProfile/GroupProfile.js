import React, { Component } from 'react';
import {
  Card,
  Button,
  Icon,
  Timestamp,
  Avatar,
  LoadingContainer,
} from '../../../../components';

import { formatNumber } from '../../../../utils/common';
import { checkGroupPermission } from '../../../../utils/permission';

class GroupProfile extends Component {
  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      readGroupRequest,
    } = this.props;
    readGroupRequest(groupId);
  }

  render() {
    const {
      group: { data, loading },
      toggleModal,
      currentUser,
    } = this.props;

    const {
      isGroupAdmin,
      isApplied,
      isBanned,
      isMember,
    } = checkGroupPermission(currentUser, data._id);

    return (
      <LoadingContainer loading={loading}>
        <Card className="border-0 m-3 m-md-0">
          <Card.Header className="border-0 p-4">
            <p className="h2-title font-weight-semibold">{data.name}</p>
            <div className="d-flex flex-row">
              <p className="p-sm">{formatNumber(1234)} members</p>
              <div className="ml-auto p-sm opacity-5 d-flex flex-row">
                Created on{' '}
                <Timestamp
                  className=""
                  timestamp={data.createdAt}
                  format="D MMM YYYY"
                />
              </div>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="border-bottom p-4 border-default-color">
              <p className="opacity-5 text-uppercase mb-3">Group description</p>
              <p>{data.description}</p>
            </div>
            <div className="border-bottom p-4 border-default-color">
              <p className="opacity-5 text-uppercase mb-3">Rules</p>
              <p>{data.rules}</p>
            </div>
            <div className="p-4">
              <p className="opacity-5 text-uppercase mb-3">Admin</p>
              <div>
                <Avatar
                  className=""
                  data={{
                    firstName: 'John',
                    lastName: 'Smith',
                    location: 'London, UK',
                  }}
                />
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex flex-row border-0 py-3 py-md-4 align-items-center">
            <div>
              {isApplied && 'Applied'}
              {isBanned && 'Banned'}
              {isMember && 'Member'}
            </div>

            {!isGroupAdmin && !isBanned && !isMember && !isApplied && (
              <Button
                className="btn-block-xs-only font-weight-bold p-lg text-uppercase px-4 ml-md-3"
                onClick={() => toggleModal('joinGroupModal', data)}
              >
                Join this group
              </Button>
            )}
            <div className="ml-auto d-none d-md-block opacity-5">
              <Icon
                name="facebook"
                className="my-auto mx-2 mx-lg-4 h3-title h-100"
              />
              <Icon
                name="twitter"
                className="my-auto mx-2 mx-lg-4 h3-title h-100"
              />
              <Icon
                name="paper-plane"
                className="my-auto mx-2 mx-lg-4 h3-title h-100"
              />
            </div>
          </Card.Footer>
        </Card>
      </LoadingContainer>
    );
  }
}

export default GroupProfile;
