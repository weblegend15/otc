import React, { Component } from 'react';

import NewOfferModalForm from '../../reduxForms/NewOfferModalForm';
import { Modal, ModalHeader } from '../../components';

export default class NewOfferModal extends Component {
  handleSubmit = values => {
    const {
      createOfferRequest,
      data: { groupId },
      toggleModal,
    } = this.props;
    const offerData = {
      have: values.have,
      want: values.want,
      note: values.note || '',
    };

    toggleModal('newOfferModal');
    toggleModal('twoFAModal', {
      submitAction: createOfferRequest,
      actionPayload: { offerData, groupId },
    });
  };

  render() {
    const { show, onHide } = this.props;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader closeButton title="Add Offer" />
        <NewOfferModalForm onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}
