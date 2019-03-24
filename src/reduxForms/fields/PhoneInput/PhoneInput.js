import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import FieldWrapper from '../FieldWrapper';

export default ({
  input: { value, onChange },
  label,
  meta: { error, touched },
  ...rest
}) => (
  <FieldWrapper error={error} touched={touched} label={label} {...rest}>
    <ReactPhoneInput
      containerClass="react-tel-input"
      defaultCountry="us"
      value={value}
      onChange={onChange}
      enableSearchField
      inputClass={error && 'is-invalid'}
    />
  </FieldWrapper>
);
