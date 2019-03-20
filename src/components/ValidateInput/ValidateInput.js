import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({
  input, label, type, placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Group controlId={`form${label}`}>
      <Form.Label>
        {label}
      </Form.Label>
      <Form.Control
        {...input}
        type={type}
        placeholder={placeholder}
        isInvalid={touched && error}
      />
      {touched && error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
