import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ input, label, meta: { touched, error }, ...rest }) => (
  <Form.Check {...rest} type="checkbox" id={`form${label}`} custom>
    <Form.Check.Input {...input} type="checkbox" />
    {label && <Form.Check.Label>{label}</Form.Check.Label>}
    {touched && error && (
      <Form.Control.Feedback className="d-flex" type="invalid">
        {error}
      </Form.Control.Feedback>
    )}
  </Form.Check>
);
