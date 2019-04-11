import React, { Component } from 'react';

import NewOfferModalForm from '../../reduxForms/NewOfferModalForm';
import { Modal, ModalHeader } from '../../components';

export default class NewOfferModal extends Component {
  handleSubmit = values => {
    const {
      createOfferRequest,
      data: { groupId },
    } = this.props;
    const offerData = {
      have: values.have,
      want: values.want,
      note: values.note,
    };
    createOfferRequest({ offerData, groupId });
  };

  render() {
    const { createOfferRequest, ...rest } = this.props;

    return (
      <Modal {...rest}>
        <ModalHeader closeButton title="Add Offer" />
        <NewOfferModalForm onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}
