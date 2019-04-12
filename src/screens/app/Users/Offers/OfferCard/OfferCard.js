import React, { Component } from 'react';

import {
  Card,
  OfferDetail,
  Button,
  Icon,
  Popover,
  OverlayTrigger,
  Badge,
} from '../../../../../components';

export default class OfferCard extends Component {
  handleRequestVouch = () => {
    const {
      toggleModal,
      offerData: { _id, group },
    } = this.props;
    toggleModal('requestVouchModal', {
      offerId: _id,
      groupId: group,
    });
  };

  handleViewProposals = () => {
    const {
      toggleModal,
      offerData: { _id, group },
    } = this.props;
    toggleModal('viewProposalsModal', {
      offerId: _id,
      groupId: group,
    });
  };

  handleClickEndlist = () => {
    const { offerData, toggleModal, currentUser } = this.props;
    toggleModal('viewOfferModal', {
      groupId: offerData.group,
      offerData: {
        ...offerData,
        offeredBy: currentUser,
      },
      actionType: 'end',
    });
  };

  handleLeaveReview = () => {
    const { toggleModal, offerData } = this.props;
    toggleModal('leaveFeedbackModal', { offerData });
  };

  renderEndPopover = () => (
    <Popover id="popover-message" className="p-sm">
      X&nbsp;&nbsp;&nbsp;End Listing
    </Popover>
  );

  renderActiveOfferFooter = () => {
    const { offerData } = this.props;
    return (
      <Card.Footer className="py-3 border-0 d-flex align-items-center justify-content-center">
        <Button
          className="btn-large font-weight-bold"
          onClick={this.handleRequestVouch}
        >
          REQUEST VOUCH
        </Button>
        {!!offerData.proposals.length && (
          <Button
            className="btn-large font-weight-bold ml-4 d-flex flex-row align-items-center"
            variant="outline-primary"
            onClick={this.handleViewProposals}
          >
            PROPOSALS&nbsp;
            <Badge variant="primary">{offerData.proposals.length}</Badge>
          </Button>
        )}
      </Card.Footer>
    );
  };

  renderPastOfferFooter = () => {
    return (
      <Card.Footer className="py-3 border-0 d-flex align-items-center justify-content-between">
        <p>Performed trade on platform</p>
        <Button
          className="btn-large font-weight-bold text-uppercase"
          variant="outline-primary"
          onClick={this.handleLeaveReview}
        >
          Leave a review
        </Button>
      </Card.Footer>
    );
  };

  render() {
    const {
      offerData,
      myActiveGroups: { list },
      currentUser,
      cardType,
    } = this.props;

    const offeredGroup = list.find(item => item._id === offerData.group);

    if (!offeredGroup) {
      return null;
    }

    return (
      <Card className="border-0">
        <Card.Header className="pb-0 card-footer-bg-color border-0 d-flex flex-row">
          <p className="h4-title font-weight-bold">
            Offer in {offeredGroup.name}
          </p>
          {cardType === 'active' && (
            <OverlayTrigger
              trigger="hover"
              delay={2}
              placement="bottom"
              overlay={this.renderEndPopover()}
            >
              <Button
                className="p-0 ml-auto"
                variant="outline-link"
                onClick={this.handleClickEndlist}
              >
                <Icon name="cog" />
              </Button>
            </OverlayTrigger>
          )}
        </Card.Header>
        <OfferDetail
          data={{ ...offerData, offeredBy: currentUser }}
          type="profileOffer"
        />
        {cardType === 'active' && this.renderActiveOfferFooter()}
        {cardType === 'past' && this.renderPastOfferFooter()}
      </Card>
    );
  }
}
