import React, { Component } from 'react';
import {
  LoadingContainer,
  Col,
  Row,
  GeneralAvatar,
  Button,
  Icon,
  Timestamp,
  BSTooltip,
  OverlayTrigger,
} from '../../../../../components';

import { findElement } from '../../../../../utils/common';

const popoverFocus = (
  <BSTooltip id="tooltip-offer-note">
    This offer has a note. Please view the offer to see its full details
  </BSTooltip>
);

export default class Offers extends Component {
  componentDidMount() {
    const { getOffersRequest, selectedGroupId } = this.props;
    getOffersRequest({ limit: 20, skip: 0, groupId: selectedGroupId });
  }

  handleViewClick = offerData => {
    const {
      toggleModal,
      selectedGroupId,
      groupMembers: { list },
    } = this.props;
    toggleModal('viewOfferModal', {
      offerData: {
        ...offerData,
        offeredBy: findElement(list, offerData.offeredBy),
      },
      groupId: selectedGroupId,
    });
  };

  renderTableHeader = () => {
    return (
      <Row className="border-bottom border-default-color py-3 m-0 px-4">
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
      groupOffers: { list },
      groupMembers: { list: membersList },
    } = this.props;

    if (!list.length) {
      return (
        <div className="font-weight-semibold text-center p-5 h3-title">
          No data
        </div>
      );
    }

    return list.map(item => {
      const member = findElement(membersList, item.offeredBy);
      return (
        <Row
          key={item._id}
          className="border-bottom border-default-color p-4 m-0 d-flex align-items-center"
        >
          <Col className="p-0">
            <Timestamp className="p-sm" timestamp={item.createdAt} />
          </Col>
          <Col className="p-0">
            <GeneralAvatar
              data={{
                ...member,
                location: `${member.city}, ${member.country}`,
              }}
            />
          </Col>
          <Col className="font-weight-semibold p-0">{item.have}</Col>
          <Col className="font-weight-semibold p-0">{item.want}</Col>
          <Col md={3} className="d-flex justify-content-between p-0">
            <Button
              className="text-uppercase font-weight-bold px-5"
              onClick={() => this.handleViewClick(item)}
            >
              View
            </Button>
            {item.note && (
              <OverlayTrigger overlay={popoverFocus}>
                <Button className="p-0" variant="outline-link">
                  <Icon name="edit" className="text-primary h4-title" />
                </Button>
              </OverlayTrigger>
            )}
          </Col>
        </Row>
      );
    });
  };

  render() {
    const {
      groupOffers: { loading },
    } = this.props;

    return (
      <div className="group-offers pt-4">
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {this.renderTableBody()}
        </LoadingContainer>
      </div>
    );
  }
}
