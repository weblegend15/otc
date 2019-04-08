import React, { Component } from 'react';

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from '../../components';

export default class ManageUserModal extends Component {
  handleConfirm = () => {
    const {
      banUserRequest,
      makeAdminRequest,
      unbanUserRequest,
      modalData,
    } = this.props;
    if (modalData.actionType === 'ban') {
      banUserRequest(modalData.userId, modalData.groupId);
    }
    if (modalData.actionType === 'admin') {
      makeAdminRequest(modalData.userId, modalData.groupId);
    }
    if (modalData.actionType === 'unban') {
      unbanUserRequest(modalData.userId, modalData.groupId);
    }
  };

  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal('manageUserModal');
  };

  render() {
    const {
      banUserRequest,
      makeAdminRequest,
      modalData,
      banUserLoading,
      makeAdminLoading,
      toggleModal,
      unbanUserRequest,
      ...rest
    } = this.props;

    if (!modalData) {
      return '';
    }

    return (
      <Modal {...rest}>
        <ModalHeader closeButton title={`Manage ${modalData.actionType}!`} />
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button
            className="w-50"
            disabled={banUserLoading || makeAdminLoading}
            onClick={this.handleConfirm}
          >
            {banUserLoading || makeAdminLoading ? 'Confirming...' : 'Confirm'}
          </Button>
          <Button className="w-50" variant="dark" onClick={this.handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
