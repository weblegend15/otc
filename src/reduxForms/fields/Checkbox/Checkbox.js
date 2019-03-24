import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({ input, label, meta: { touched, error }, ...rest }) => {
  return (
    <Form.Check type="checkbox" id={`form${label}`} custom {...rest}>
      {touched && error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Check>
  );
};
