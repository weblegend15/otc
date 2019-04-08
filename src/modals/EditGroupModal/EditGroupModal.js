import React, { Component } from 'react';

import { EditGroupForm } from '../../reduxForms';
import { Modal, ModalHeader } from '../../components';

export default class EditGroupModal extends Component {
  handleSubmit = () => {
    const { updateGroupRequest, groupData, editForm } = this.props;
    updateGroupRequest(groupData._id, editForm.values);
  };

  render() {
    const {
      groupData,
      fieldName,
      editForm,
      updateGroupRequest,
      modalData,
      ...rest
    } = this.props;
    return (
      <Modal {...rest}>
        <ModalHeader title={groupData.name} />
        <EditGroupForm
          onSubmit={this.handleSubmit}
          defaultValue={groupData[fieldName]}
          fieldName={fieldName}
        />
      </Modal>
    );
  }
}
