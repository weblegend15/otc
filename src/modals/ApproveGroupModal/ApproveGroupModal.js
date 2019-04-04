import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '../../components';

export default class ApproveGroupModal extends Component {
  handleConfirm = () => {
    const { approveGroupRequest, groupId } = this.props;
    approveGroupRequest(groupId);
  };

  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal('approveGroupModal');
  };

  render() {
    const {
      approveGroupRequest,
      toggleModal,
      groupId,
      loading,
      ...rest
    } = this.props;

    return (
      <Modal {...rest}>
        <ModalHeader closeButton title="Approve Group" />
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button className="w-50" variant="dark" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button
            className="w-50"
            disabled={loading}
            onClick={this.handleConfirm}
          >
            {loading ? 'Publishing...' : 'Publish'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
