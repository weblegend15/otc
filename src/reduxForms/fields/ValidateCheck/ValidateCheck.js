import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ input, label, type, meta: { touched, error } }) => {
  return (
    <Form.Check type={type} id={`form${label}`} custom>
      <Form.Check.Input {...input} type={type} />
      <Form.Check.Label>{label}</Form.Check.Label>
      {touched && error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Check>
  );
};
