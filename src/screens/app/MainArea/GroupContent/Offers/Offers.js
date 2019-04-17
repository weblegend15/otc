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
      currentUser,
    } = this.props;
    toggleModal('viewOfferModal', {
      offerData: {
        ...offerData,
        offeredBy: findElement(list, offerData.offeredBy),
      },
      groupId: selectedGroupId,
      actionType:
        offerData.counterpart === currentUser._id &&
        !offerData.feedbackToOffer &&
        offerData.status === 'ENDED'
          ? 'feedbackByCounterpart'
          : '',
    });
  };

  renderTableHeader = () => {
    return (
      <Row className="border-bottom border-default-color py-3 m-0 px-4 table-header">
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">DATE</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">USER</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">HAS</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">WANTS</Col>
        <Col className="font-weight-semibold p-0 opacity-5 p-sm">DETAILS</Col>
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
        <div
          key={item._id}
          className="border-bottom border-default-color p-0 p-md-4 mx-2 mb-4 m-md-0 d-flex align-items-center table-row"
        >
          <div className="table-column">
            <Timestamp className="p-sm" timestamp={item.createdAt} />
            <GeneralAvatar
              data={{
                ...member,
                location: `${member.city}, ${member.country}`,
              }}
            />
          </div>
          <div className="table-column  has-wants">
            <div>
              <p className="has-wants-label">has</p>
              <p className="font-weight-semibold p-0">{item.have}</p>
            </div>
            <div>
              <p className="has-wants-label">wants</p>
              <p className="font-weight-semibold p-0">{item.want}</p>
            </div>
          </div>
          <div className="table-column">
            <Button
              className="text-uppercase font-weight-bold px-5 btn-regular"
              onClick={() => this.handleViewClick(item)}
            >
              View
            </Button>
            {item.note && (
              <OverlayTrigger overlay={popoverFocus} placement="bottom">
                <Button className="p-0" variant="outline-link">
                  <Icon name="edit" className="text-primary h4-title" />
                </Button>
              </OverlayTrigger>
            )}
          </div>
        </div>
      );
    });
  };

  render() {
    const {
      groupOffers: { loading },
    } = this.props;

    return (
      <div className="group-offers pt-0 pt-md-4">
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {this.renderTableBody()}
        </LoadingContainer>
      </div>
    );
  }
}
