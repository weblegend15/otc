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
      data: { offerData, groupId },
    } = this.props;
    getProposalsRequest({
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

  render() {
    const {
      createProposalRequest,
      getProposalsRequest,
      data,
      proposals: { list, loading },
      currentUser,
      ...rest
    } = this.props;
    const { isTrade } = this.state;

    if (!data) {
      return null;
    }

    const myProposal = list.find(item => item.proposedBy === currentUser._id);

    return (
      <Modal {...rest}>
        <ModalHeader closeButton className="border-0 pb-2" title="Offer" />
        <ModalBody className="p-0">
          <LoadingContainer loading={loading}>
            <OfferDetail data={data.offerData} proposals={list} vouches={[]} />
          </LoadingContainer>
        </ModalBody>
        {!myProposal && isTrade && (
          <ProposalForm onSubmit={this.handleSubmit} />
        )}
        {!myProposal && !isTrade && (
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
