import React, { Component } from 'react';

import { Modal, ModalHeader } from '../../components';
import { JoinGroupModalForm } from '../../reduxForms';

export default class JoinGroupModal extends Component {
  handleSubmit = values => {
    const {
      joinGroupRequest,
      data: { _id },
    } = this.props;
    joinGroupRequest(values, _id);
  };

  render() {
    const { data, joinGroupRequest, ...rest } = this.props;

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
