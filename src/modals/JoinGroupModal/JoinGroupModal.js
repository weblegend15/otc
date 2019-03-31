import React, { Component } from 'react';

import { Modal, ModalHeader } from '../../components';
import { JoinGroupModalForm } from '../../reduxForms';

export default class JoinGroupModal extends Component {
  handleSubmit = values => {
    const { joinGroupRequest, groupId } = this.props;
    joinGroupRequest(values, groupId);
  };

  render() {
    const { data, ...rest } = this.props;

    return (
      <Modal {...rest}>
        <ModalHeader
          closeButton
          title={data.name}
          description="Please answer the questions below to submit your application to the group admin"
        />
        <JoinGroupModalForm onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}
