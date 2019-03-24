import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

export default ({
  input: { value, onChange },
  meta: { error, touched },
  label,
  selectCountry,
  ...rest
}) => (
  <FieldWrapper error={error} touched={touched} label={label} {...rest}>
    <CountryDropdown
      className={cx('form-control', { 'is-invalid': error })}
      value={value}
      priorityOptions={['US']}
      onChange={onChange}
    />
  </FieldWrapper>
);
