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
    } = this.props;
    const { readGroupRequest } = this.props;
    readGroupRequest(groupId);
  }

  render() {
    const {
      group: { data, loading },
    } = this.props;

    return (
      <LoadingContainer loading={loading}>
        <Card>
          <Card.Header className="border-none">
            <h3 className="row mx-0">{data.name}</h3>
            <div className="row mx-0">
              <h6 className="mr-auto">{formatNumber(1234)} members</h6>
              <h6 className="font-weight-light">
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
            <div className="border-bottom p-4">
              <h4 className="font-weight-light">GROUP DESCRIPTION</h4>
              <p>{data.description}</p>
            </div>
            <div className="border-bottom p-4">
              <h4 className="font-weight-light">RULES</h4>
              <p>{data.rules}</p>
            </div>
            <div className="p-4">
              <h4 className="font-weight-light">ADMIN</h4>
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
          <Card.Footer className="row text-muted mx-0 border-none p-4">
            <Button>JOIN THIS GROUP</Button>
            <div className="ml-auto d-flex">
              <Icon
                name="facebook"
                className="btn text-light h4 mx-4 my-auto"
              />
              <Icon name="twitter" className="btn text-light h4 mx-4 my-auto" />
              <Icon
                name="paper-plane"
                className="btn text-light h4 mx-4 my-auto"
              />
            </div>
          </Card.Footer>
        </Card>
      </LoadingContainer>
    );
  }
}

export default GroupProfile;
