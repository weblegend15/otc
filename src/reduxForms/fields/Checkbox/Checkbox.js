import React from 'react';
import Form from 'react-bootstrap/Form';

export default ({
  input: { onChange },
  label,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Check
      type="checkbox"
      label={label}
      id={`form${label}`}
      onChange={onChange}
      custom
      {...rest}
    >
      {touched && error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Check>
  );
};
