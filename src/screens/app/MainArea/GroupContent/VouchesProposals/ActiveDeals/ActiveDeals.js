import React, { Component } from 'react';

import {
  Col,
  Row,
  LoadingContainer,
  Timestamp,
  Button,
  Badge,
} from '../../../../../../components';

export default class ActiveDeals extends Component {
  componentDidMount() {
    const { selectedGroupId, getOffersRequest } = this.props;
    getOffersRequest({ skip: 0, limit: 1000, groupId: selectedGroupId });
  }

  handleProposalsClick = offerId => {
    const { toggleModal, selectedGroupId } = this.props;
    toggleModal('viewProposalsModal', { offerId, groupId: selectedGroupId });
  };

  handleVouchRequest = offerId => {
    const { toggleModal, selectedGroupId } = this.props;
    toggleModal('requestVouchModal', { offerId, groupId: selectedGroupId });
  };

  renderTableHeader = () => {
    return (
      <Row className="mx-0 border-bottom border-default-color py-3">
        <Col className="p-sm font-weight-semibold opacity-5">DATE</Col>
        <Col className="p-sm font-weight-semibold opacity-5">HAS</Col>
        <Col className="p-sm font-weight-semibold opacity-5">WANTS</Col>
        <Col className="p-sm font-weight-semibold opacity-5 text-center">
          PROPOSALS
        </Col>
        <Col className="p-sm font-weight-semibold opacity-5  text-center">
          VOUCHES
        </Col>
      </Row>
    );
  };

  renderTableBody = offersList => {
    if (!offersList.length) {
      return (
        <div className="font-weight-semibold text-center p-5 h3-title">
          No data
        </div>
      );
    }

    return offersList.map(item => (
      <Row
        key={item._id}
        className="mx-0 border-bottom border-default-color py-4 d-flex align-items-center"
      >
        <Col className="p-sm">
          <Timestamp timestamp={item.createdAt} />
        </Col>
        <Col className="font-weight-semibold">{item.have}</Col>
        <Col className="font-weight-semibold">{item.want}</Col>
        <Col className="font-weight-semibold text-center">
          {!item.proposals.length ? (
            '-'
          ) : (
            <Button
              variant="link"
              className="btn-regular font-weight-bold"
              onClick={() => this.handleProposalsClick(item._id)}
            >
              <Badge variant="primary">{item.proposals.length}</Badge>
            </Button>
          )}
        </Col>
        <Col
          className="font-weight-semibold text-center"
          onClick={() => this.handleVouchRequest(item._id)}
        >
          <Button className="px-4 text-uppercase font-weight-bold btn-regular">
            Request
          </Button>
        </Col>
      </Row>
    ));
  };

  render() {
    const {
      activeGroupOffers: { loading, list },
    } = this.props;

    return (
      <div>
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {this.renderTableBody(list)}
        </LoadingContainer>
      </div>
    );
  }
}
