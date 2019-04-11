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
      data: { offerData, groupId },
    } = this.props;
    getProposalsRequest({
      limit: 20,
      skip: 0,
      offerId: offerData._id,
      groupId,
    });
    getVouchesRequest({
      limit: 20,
      skip: 0,
      offerId: offerData._id,
      groupId,
    });
  }

  handleTradeClick = () => {
    this.setState({ isTrade: true });
  };

  handleSubmit = values => {
    const {
      createProposalRequest,
      data: { offerData, groupId },
    } = this.props;

    const proposalData = {
      have: values.have,
      want: values.want,
    };

    createProposalRequest({ proposalData, offerId: offerData._id, groupId });
  };

  addMembers = (list, field) => {
    const { groupMembers } = this.props;
    return list.map(item => ({
      ...item,
      [field]: groupMembers.find(member => member._id === item[field]),
    }));
  };

  render() {
    const {
      data,
      currentUser,
      show,
      onHide,
      proposals: { list, loading },
      vouches: { list: vouchesList, loading: vouchesLoading },
    } = this.props;
    const { isTrade } = this.state;

    if (!data) {
      return null;
    }

    const myProposal = list.find(item => item.proposedBy === currentUser._id);
    const isMyOffer = data.offerData.offeredBy === currentUser._id;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader closeButton className="border-0 pb-2" title="Offer" />
        <ModalBody className="p-0">
          <LoadingContainer loading={loading || vouchesLoading}>
            <OfferDetail
              data={data.offerData}
              proposals={this.addMembers(list, 'proposedBy')}
              vouches={this.addMembers(vouchesList, 'requestedBy')}
            />
          </LoadingContainer>
        </ModalBody>
        {!isMyOffer && !myProposal && isTrade && (
          <ProposalForm onSubmit={this.handleSubmit} />
        )}
        {!isMyOffer && !myProposal && !isTrade && (
          <ModalFooter>
            <Button className="btn-block" onClick={this.handleTradeClick}>
              Trade
            </Button>
          </ModalFooter>
        )}
      </Modal>
    );
  }
}
