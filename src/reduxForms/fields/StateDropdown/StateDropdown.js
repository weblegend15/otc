import React from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

export default ({
  input: { value, onChange },
  meta: { error, touched },
  country,
  label,
  selectState,
  ...rest
}) => (
  <FieldWrapper error={error} touched={touched} label={label} {...rest}>
    <RegionDropdown
      className={cx('form-control', { 'is-invalid': !value })}
      disableWhenEmpty
      country={country}
      value={value}
      onChange={onChange}
      labelType="short"
      valueType="short"
      defaultOptionLabel="Select State"
    />
  </FieldWrapper>
);
