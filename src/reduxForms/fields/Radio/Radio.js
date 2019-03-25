import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ meta: { touched, error }, ...rest }) => (
  <Form.Check {...rest} type="radio">
    {touched && error && (
      <Form.Control.Feedback className="d-flex" type="invalid">
        {error}
      </Form.Control.Feedback>
    )}
  </Form.Check>
);
