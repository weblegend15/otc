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

  handleProposalsClick = () => {};

  handleVouchRequest = offerId => {
    const { toggleModal, selectedGroupId } = this.props;
    toggleModal('requestVouchModal', { offerId, groupId: selectedGroupId });
  };

  renderTableHeader = () => {
    return (
      <Row className="mx-0 border-bottom border-default-color py-3">
        <Col className="p-sm font-weight-semibold opacity-5">DATE</Col>
        <Col className="p-sm font-weight-semibold opacity-5">GROUP</Col>
        <Col className="p-sm font-weight-semibold opacity-5">HAS</Col>
        <Col className="p-sm font-weight-semibold opacity-5">WANTS</Col>
        <Col className="p-sm font-weight-semibold opacity-5">PROPOSALS</Col>
        <Col className="p-sm font-weight-semibold opacity-5">VOUCHES</Col>
      </Row>
    );
  };

  renderTableBody = offersList => {
    const {
      myActiveGroups: { list: groupsList },
    } = this.props;

    return offersList.map(item => (
      <Row
        key={item._id}
        className="mx-0 border-bottom border-default-color py-4 d-flex align-items-center"
      >
        <Col className="p-sm">
          <Timestamp timestamp={item.createdAt} />
        </Col>
        <Col className="font-weight-semibold">
          {groupsList.find(el => el._id === item.group).name}
        </Col>
        <Col className="font-weight-semibold">{item.have}</Col>
        <Col className="font-weight-semibold">{item.want}</Col>
        <Col className="font-weight-semibold">
          <Button
            variant="outline-primary font-weight-semibold text-uppercase d-flex flex-row algin-items-center btn-regular"
            onClick={this.handleProposalsClick}
          >
            Proposals&nbsp;
            <Badge variant="primary">{item.proposals.length}</Badge>
          </Button>
        </Col>
        <Col
          className="font-weight-semibold"
          onClick={() => this.handleVouchRequest(item._id)}
        >
          <Button className="text-uppercase font-weight-bold btn-regular">
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
      <LoadingContainer loading={loading}>
        {this.renderTableHeader()}
        {this.renderTableBody(list)}
      </LoadingContainer>
    );
  }
}
