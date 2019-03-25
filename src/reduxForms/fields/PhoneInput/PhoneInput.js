import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import FieldWrapper from '../FieldWrapper';

export default ({ input, label, meta: { error, touched }, ...rest }) => (
  <FieldWrapper error={error} touched={touched} label={label} {...rest}>
    <ReactPhoneInput
      containerClass="react-tel-input"
      defaultCountry="us"
      enableSearchField
      inputClass={error && touched && 'is-invalid'}
      {...input}
    />
  </FieldWrapper>
);
