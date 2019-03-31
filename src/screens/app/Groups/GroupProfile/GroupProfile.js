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
    } = this.props;

    return (
      <LoadingContainer className="h-100" loading={loading}>
        <Card className="group-profile m-3 m-md-0 h-100">
          <Card.Header className="border-0">
            <h3 className="row mx-0 font-weight-semibold">{data.name}</h3>
            <div className="row mx-0">
              <h6 className="mr-auto">{formatNumber(1234)} members</h6>
              <h6>
                Created on{' '}
                <Timestamp
                  className="d-inline"
                  timestamp={data.createdAt}
                  format="D MMM YYYY"
                />
              </h6>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="border-bottom">
              <span>GROUP DESCRIPTION</span>
              <p>{data.description}</p>
            </div>
            <div className="border-bottom">
              <span>RULES</span>
              <p>{data.rules}</p>
            </div>
            <div>
              <span>ADMIN</span>
              <div>
                <Avatar
                  className="sm"
                  data={{
                    firstName: 'John',
                    lastName: 'Smith',
                    location: 'London, UK',
                  }}
                />
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="border-0 py-3 py-md-4">
            <Button
              className="btn-block-xs-only text-uppercase font-wegith-bold"
              onClick={() => toggleModal('joinGroupModal', data)}
            >
              Join this group
            </Button>
            <div className="ml-auto d-none d-sm-block">
              <Icon name="facebook" className="my-auto" />
              <Icon name="twitter" className="my-auto" />
              <Icon name="paper-plane" className="my-auto" />
            </div>
          </Card.Footer>
        </Card>
      </LoadingContainer>
    );
  }
}

export default GroupProfile;
