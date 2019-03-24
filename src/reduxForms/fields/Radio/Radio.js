import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ meta: { touched, error }, ...rest }) => (
  <Form.Check type="radio" {...rest}>
    {touched && error && (
      <Form.Control.Feedback className="d-flex" type="invalid">
        {error}
      </Form.Control.Feedback>
    )}
  </Form.Check>
);
