import React from 'react';
import Form from 'react-bootstrap/Form';
import FieldWrapper from '../FieldWrapper';

export default ({
  input,
  label,
  className,
  meta: { touched, error },
  ...rest
}) => (
  <FieldWrapper
    className={className}
    error={error}
    touched={touched}
    label={label}
  >
    <Form.Control
      {...input}
      {...rest}
      isInvalid={touched && error}
      autoComplete="new-password"
    />
  </FieldWrapper>
);
