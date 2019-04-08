import React, { Component } from 'react';

import {
  LoadingContainer,
  Col,
  Row,
  GeneralAvatar,
  Button,
  Icon,
  Timestamp,
} from '../../../../../components';

import { findElement } from '../../../../../utils/common';

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getOffersRequest, selectedGroupId } = this.props;
    getOffersRequest({ limit: 20, skip: 0, groupId: selectedGroupId });
  }

  handleViewClick = offerId => {};

  renderTableHeader = () => {
    return (
      <Row className="border-bottom border-default-color py-3 m-0 px-5">
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">DATE</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">USER</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">HAS</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">WANTS</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm" md={3}>
          DETAILS
        </Col>
      </Row>
    );
  };

  renderTableBody = () => {
    const {
      groupOffers: { list, loading },
      groupMembers: { list: membersList },
    } = this.props;

    return (
      <LoadingContainer loading={loading}>
        {list.map(item => (
          <Row
            key={item._id}
            className="border-bottom border-default-color py-4 px-5 m-0 d-flex align-items-center"
          >
            <Col className="p-0">
              <Timestamp className="p-sm" date={item.createdAt} />
            </Col>
            <Col className="p-0">
              <GeneralAvatar
                data={{
                  ...findElement(membersList, item.offeredBy),
                  location: 'London, UK',
                }}
              />
            </Col>
            <Col className="font-weight-semibold p-0">{item.have}</Col>
            <Col className="font-weight-semibold p-0">{item.want}</Col>
            <Col md={3} className="d-flex justify-content-between p-0">
              <Button
                className="text-uppercase font-weight-bold px-5"
                onClick={() => this.handleViewClick(item._id)}
              >
                View
              </Button>
              <Button className="p-0" variant="outline-link">
                <Icon name="edit" className="text-primary" size="2x" />
              </Button>
            </Col>
          </Row>
        ))}
      </LoadingContainer>
    );
  };

  render() {
    return (
      <div className="group-offers pt-4">
        {this.renderTableHeader()}
        {this.renderTableBody()}
      </div>
    );
  }
}
