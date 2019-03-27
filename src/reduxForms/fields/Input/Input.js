import React from 'react';
import Form from 'react-bootstrap/Form';
import FieldWrapper from '../FieldWrapper';

export default ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
  as,
  rows,
  ...rest
}) => (
  <FieldWrapper {...rest} error={error} touched={touched} label={label}>
    <Form.Control
      {...input}
      type={type}
      as={as}
      rows={rows}
      placeholder={placeholder}
      isInvalid={touched && error}
      autoComplete="new-password"
    />
  </FieldWrapper>
);
