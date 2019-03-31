import React, { Component } from 'react';

import NewGroupModalForm from '../../reduxForms/NewGroupModalForm';
import { Modal, ModalHeader } from '../../components';

export default class NewGroupModal extends Component {
  handleSubmit = values => {
    const { createGroupRequest } = this.props;
    createGroupRequest({
      name: values.groupName,
      description: values.groupDescription,
    });
  };

  render() {
    return (
      <Modal {...this.props}>
        <ModalHeader
          closeButton
          title="Request to Create a Group"
          description="Please fill out the application form to send a new group request"
        />
        <NewGroupModalForm onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}
