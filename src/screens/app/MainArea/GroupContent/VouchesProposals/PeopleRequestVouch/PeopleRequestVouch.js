import React, { Component } from 'react';

import {
  LoadingContainer,
  Col,
  Row,
  Button,
  GeneralAvatar,
  Timestamp,
  Icon,
} from '../../../../../../components';

export default class PeopleRequestVouch extends Component {
  componentDidMount() {
    const { getMyVouchesRequest, selectedGroupId } = this.props;
    getMyVouchesRequest({ limit: 1000, skip: 0, groupId: selectedGroupId });
  }

  handleViewClick = vouch => {
    const { toggleModal } = this.props;
    toggleModal('viewVouchModal', { vouchData: vouch });
  };

  renderTableHeader = () => {
    return (
      <Row className="mx-0 pt-3 pb-2 px-4 border-bottom border-default-color table-header">
        <Col className="p-0 p-sm font-weight-semibold opacity-5">DATE</Col>
        <Col className="p-0 p-sm font-weight-semibold opacity-5">USER</Col>
        <Col className="p-0 p-sm font-weight-semibold opacity-5">HAS</Col>
        <Col className="p-0 p-sm font-weight-semibold opacity-5">WANTS</Col>
        <Col className="p-0 p-sm font-weight-semibold opacity-5">TYPE</Col>
        <Col className="p-0 p-sm font-weight-semibold opacity-5 text-center">
          ACTIONS
        </Col>
      </Row>
    );
  };

  renderTableBody = () => {
    const {
      myVouches: { list },
      groupMembers: { list: membersList },
    } = this.props;

    if (!list.length) {
      return (
        <div className="font-weight-semibold text-center p-5 h3-title">
          No data
        </div>
      );
    }

    return list.map(vouch => {
      const memberRequested = membersList.find(
        member => member._id === vouch.requestedBy,
      );
      const isOffer = vouch.requestedBy === vouch.offer.offeredBy;

      return (
        <Row
          key={vouch._id}
          className="mx-0 p-4 border-bottom border-default-color d-flex align-items-center"
        >
          <Col className="p-0 p-sm">
            <Timestamp timestamp={vouch.createdAt} />
          </Col>
          <Col>
            {memberRequested ? (
              <GeneralAvatar
                data={{
                  firstName: memberRequested.firstName,
                  lastName: memberRequested.lastName,
                  location: `${memberRequested.city}, ${
                    memberRequested.country
                  }`,
                }}
              />
            ) : (
              '-'
            )}
          </Col>
          <Col className="p-0 font-weight-semibold">{vouch.offer.have}</Col>
          <Col className="p-0 font-weight-semibold">{vouch.offer.want}</Col>
          <Col className="p-0">
            <Icon
              name={isOffer ? 'file' : 'star'}
              className="h4-title text-primary"
            />
          </Col>
          <Col className="p-0 text-center">
            <Button
              className="btn-regular font-weight-bold px-4"
              variant="outline-primary"
              onClick={() =>
                this.handleViewClick({ ...vouch, requestedBy: memberRequested })
              }
            >
              VIEW
            </Button>
          </Col>
        </Row>
      );
    });
  };

  render() {
    const {
      myVouches: { loading },
    } = this.props;
    return (
      <div>
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {this.renderTableBody()}
        </LoadingContainer>
      </div>
    );
  }
}
