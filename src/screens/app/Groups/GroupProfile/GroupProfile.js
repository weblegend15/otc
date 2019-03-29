import React, { Component } from 'react';
import {
  Card,
  Button,
  Icon,
  Timestamp,
  Avatar,
  LoadingContainer,
} from '../../../../components';
import JoinGroupModal from '../../../../modals/JoinGroupModal';

import { formatNumber } from '../../../../utils/common';

class GroupProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { groupId },
      },
      readGroupRequest,
    } = this.props;
    readGroupRequest(groupId);
  }

  handleToggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const {
      group: { data, loading },
      match: {
        params: { groupId },
      },
    } = this.props;
    const { showModal } = this.state;

    return (
      <LoadingContainer loading={loading}>
        <Card className="group-profile">
          <Card.Header className="border-0">
            <h3 className="row mx-0">{data.name}</h3>
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
          <Card.Footer className="border-0">
            <Button
              className="btn-block-xs-only"
              onClick={this.handleToggleModal}
            >
              JOIN THIS GROUP
            </Button>
            <div className="ml-auto d-none d-sm-block">
              <Icon name="facebook" className="my-auto" />
              <Icon name="twitter" className="my-auto" />
              <Icon name="paper-plane" className="my-auto" />
            </div>
          </Card.Footer>
        </Card>
        <JoinGroupModal
          show={showModal}
          onHide={this.handleToggleModal}
          groupId={groupId}
          groupData={data}
        />
      </LoadingContainer>
    );
  }
}

export default GroupProfile;
