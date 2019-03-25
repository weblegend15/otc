import React from 'react';
import Form from 'react-bootstrap/Form';
import FieldWrapper from '../FieldWrapper';

export default ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <FieldWrapper error={error} touched={touched} label={label} {...rest}>
      <Form.Control
        {...input}
        type={type}
        placeholder={placeholder}
        isInvalid={touched && error}
        autoComplete="new-input"
      />
    </FieldWrapper>
  );
};
