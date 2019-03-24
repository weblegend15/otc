import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ label, touched, error, children, ...rest }) => {
  return (
    <Form.Group controlId={`form${label}`} {...rest}>
      {label && <Form.Label>{label}</Form.Label>}
      {children}
      {touched && error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
