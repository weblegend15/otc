import React, { Component } from 'react';
import { TwoFACard, Modal, ModalHeader, ModalBody } from '../../components';

export default class AddTwoFAModal extends Component {
  handleNext = type => {
    const {
      confirmTwoFARequest,
      toggleModal,
      twoFAData: { data },
    } = this.props;

    switch (type) {
      case 'proceed':
        confirmTwoFARequest({ token: data.base32 });
        break;
      case 'skip':
        toggleModal('addTwoFAModal');
        break;
      default:
        break;
    }
  };

  render() {
    const {
      show,
      onHide,
      twoFAData: { data, loading },
      isConfirmTwoFA,
    } = this.props;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader title="Add two factor authenticator" />
        <ModalBody className="p-0">
          <TwoFACard
            className="shadow-none"
            onProceed={() => this.handleNext('proceed')}
            onSkip={() => this.handleNext('skip')}
            loading={loading}
            data={data}
            proceeding={isConfirmTwoFA}
          />
        </ModalBody>
      </Modal>
    );
  }
}
