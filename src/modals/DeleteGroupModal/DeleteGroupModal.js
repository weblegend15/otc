import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '../../components';

export default class DeleteGroupModal extends Component {
  handleConfirm = () => {
    const { deleteGroupRequest, groupId } = this.props;
    deleteGroupRequest(groupId);
  };

  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal('deleteGroupModal');
  };

  render() {
    const {
      deleteGroupRequest,
      toggleModal,
      groupId,
      loading,
      ...rest
    } = this.props;

    return (
      <Modal {...rest}>
        <ModalHeader closeButton title="Delete Group" />
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button className="w-50" variant="dark" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button
            className="w-50"
            variant="danger"
            disabled={loading}
            onClick={this.handleConfirm}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
