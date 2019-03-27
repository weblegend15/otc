import React from 'react';

import NewGroupModalForm from '../../reduxForms/NewGroupModalForm';
import { Modal } from '../../components';

export default ({ show, onHide, ...rest }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton className="p-4">
        <Modal.Title>
          <p>Request to Create a Group</p>
          <h6 className="text-light font-weight-light">
            Please fill out the application form to send a new group request
          </h6>
        </Modal.Title>
      </Modal.Header>
      <NewGroupModalForm {...rest} />
    </Modal>
  );
};
