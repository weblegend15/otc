import React, { Component } from 'react';

import NewGroupModalForm from '../../reduxForms/NewGroupModalForm';
import { Modal } from '../../components';

class NewGroupModal extends Component {
  handleSubmit = values => {
    const { createGroupRequest, onHide } = this.props;
    createGroupRequest({
      name: values.groupName,
      description: values.groupDescription,
    });

    // TODO hide modal after group successfully created
    onHide();
  };

  render() {
    const { show, onHide, ...rest } = this.props;
    return (
      <Modal className="new-group-modal" show={show} onHide={onHide}>
        <Modal.Header closeButton className="p-4">
          <Modal.Title>
            <p>Request to Create a Group</p>
            <h6>
              Please fill out the application form to send a new group request
            </h6>
          </Modal.Title>
        </Modal.Header>
        <NewGroupModalForm {...rest} onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}

export default NewGroupModal;
