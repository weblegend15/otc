import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

export default ({
  input,
  meta: { error, touched },
  label,
  selectCountry,
  ...rest
}) => (
  <FieldWrapper {...rest} error={error} touched={touched} label={label}>
    <CountryDropdown
      className={cx('form-control', { 'is-invalid': error && touched })}
      priorityOptions={['US']}
      autoFocus={false}
      defaultOptionLabel="-"
      {...input}
    />
  </FieldWrapper>
);
