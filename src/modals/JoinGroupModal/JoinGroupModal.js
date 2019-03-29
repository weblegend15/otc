import React, { Component } from 'react';

import { Modal } from '../../components';
import { JoinGroupModalForm } from '../../reduxForms';

export default class JoinGroupModal extends Component {
  componentDidUpdate(prevProps) {
    const { submitting, onHide } = this.props;
    if (prevProps.submitting && !submitting) {
      onHide();
    }
  }

  handleSubmit = values => {
    const { joinGroupRequest, groupId } = this.props;
    joinGroupRequest(values, groupId);
  };

  render() {
    const { show, onHide, groupData } = this.props;

    return (
      <Modal className="join-group-modal" show={show} onHide={onHide}>
        <Modal.Header closeButton className="px-4 py-3">
          <Modal.Title>
            <p>{groupData.name}</p>
            <h6 className="mt-3 mb-0">
              Please answer the questions below to submit your application to
              the group admin
            </h6>
          </Modal.Title>
        </Modal.Header>

        <JoinGroupModalForm onHide={onHide} onSubmit={this.handleSubmit} />
      </Modal>
    );
  }
}
