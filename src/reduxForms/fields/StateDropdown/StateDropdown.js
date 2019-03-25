import React from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

export default ({
  input: { value, onChange, onBlur, ...input },
  meta: { error, touched },
  country,
  label,
  selectState,
  ...rest
}) => (
  <FieldWrapper {...rest} error={error} label={label} touched={touched}>
    <RegionDropdown
      className={cx('form-control', { 'is-invalid': touched && error })}
      disableWhenEmpty
      country={country}
      value={value}
      onChange={onChange}
      labelType="short"
      valueType="short"
      defaultOptionLabel="-"
      onBlur={onBlur}
      {...input}
    />
  </FieldWrapper>
);
