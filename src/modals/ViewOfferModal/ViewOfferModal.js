import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  OfferDetail,
  LoadingContainer,
} from '../../components';

import { ProposalForm } from '../../reduxForms';

export default class NewGroupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrade: false,
    };
  }

  componentDidMount() {
    const {
      getProposalsRequest,
      getVouchesRequest,
      getGroupMembersRequest,

      data: { offerData, actionType },
    } = this.props;
    getProposalsRequest({
      limit: 20,
      skip: 0,
      offerId: offerData._id,
      groupId: offerData.group,
    });
    getVouchesRequest({
      limit: 20,
      skip: 0,
      offerId: offerData._id,
      groupId: offerData.group,
    });
    if (actionType === 'delete') {
      getGroupMembersRequest({
        groupId: offerData.group,
        skip: 0,
        limit: 1000,
      });
    }
    //     if (actionType === 'end') {
    //   getGroupMembersRequest({ groupId, skip: 0, limit: 1000 });
    // }
  }

  handleTradeClick = () => {
    this.setState({ isTrade: true });
  };

  handleSubmit = values => {
    const {
      createProposalRequest,
      data: { offerData },
      toggleModal,
    } = this.props;

    const proposalData = {
      have: values.have,
      want: values.want,
    };

    toggleModal('viewOfferModal');
    toggleModal('twoFAModal', {
      submitAction: createProposalRequest,
      actionPayload: {
        proposalData,
        offerId: offerData._id,
        groupId: offerData.group,
      },
    });
  };

  handleDeleteOffer = () => {
    const {
      deleteOfferRequest,
      data: { offerData },
    } = this.props;
    deleteOfferRequest({ groupId: offerData.group, offerId: offerData._id });
  };

  handleEndOffer = () => {
    const {
      endOfferRequest,
      data: { offerData },
      toggleModal,
    } = this.props;

    toggleModal('viewOfferModal');
    toggleModal('twoFAModal', {
      submitAction: endOfferRequest,
      actionPayload: { groupId: offerData.group, offerId: offerData._id },
    });
  };

  handleLeaveFeedback = () => {
    const {
      toggleModal,
      data: { offerData },
    } = this.props;
    toggleModal('viewOfferModal');
    toggleModal('leaveFeedbackModal', { offerData });
  };

  renderModalFooter = (isMyOffer, myProposal) => {
    const {
      data: { actionType, offerData },
      groupOffer: { loading },
    } = this.props;
    const { isTrade } = this.state;

    if (
      offerData.status !== 'ENDED' &&
      actionType !== 'feedbackByCounterpart' &&
      !isMyOffer &&
      !myProposal &&
      !isTrade
    ) {
      return (
        <ModalFooter>
          <Button className="btn-block" onClick={this.handleTradeClick}>
            Trade
          </Button>
        </ModalFooter>
      );
    }

    switch (actionType) {
      case 'delete':
        return (
          <ModalFooter>
            <Button
              className="btn-block"
              variant="dark"
              onClick={this.handleDeleteOffer}
              disabled={loading}
            >
              {loading ? 'Deleting...' : 'Delete Offer'}
            </Button>
          </ModalFooter>
        );
      case 'end':
        return (
          <ModalFooter>
            <Button
              className="btn-block"
              variant="dark"
              onClick={this.handleEndOffer}
              disabled={loading}
            >
              {loading ? 'Ending...' : 'End Offer'}
            </Button>
          </ModalFooter>
        );
      case 'feedbackByCounterpart':
        return (
          <ModalFooter>
            <Button className="btn-block" onClick={this.handleLeaveFeedback}>
              Leave Feedback
            </Button>
          </ModalFooter>
        );
      default:
        return null;
    }
  };

  render() {
    const {
      data,
      currentUser,
      show,
      onHide,
      proposals: { list: proposalsList, loading },
      vouches: { list: vouchesList, loading: vouchesLoading },
    } = this.props;

    if (!data) {
      return null;
    }

    const { isTrade } = this.state;
    const isMyOffer = data.offerData.offeredBy._id === currentUser._id;
    const myProposal = proposalsList.find(
      item => item.proposedBy === currentUser._id,
    );

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader closeButton className="border-0 pb-0" title="Offer" />
        <ModalBody className="p-0">
          <LoadingContainer loading={loading || vouchesLoading}>
            <OfferDetail
              data={data.offerData}
              proposals={proposalsList}
              vouches={vouchesList}
              isMyOffer={isMyOffer}
            />
          </LoadingContainer>
        </ModalBody>
        {data.actionType !== 'feedbackByCounterpart' &&
          !isMyOffer &&
          !myProposal &&
          isTrade && <ProposalForm onSubmit={this.handleSubmit} />}
        {this.renderModalFooter(isMyOffer, myProposal)}
      </Modal>
    );
  }
}
