import React from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';

export default ({ title, description, ...rest }) => (
  <ModalHeader {...rest}>
    <ModalTitle>{title}</ModalTitle>
    {description && <p className="modal-header-description">{description}</p>}
  </ModalHeader>
);
