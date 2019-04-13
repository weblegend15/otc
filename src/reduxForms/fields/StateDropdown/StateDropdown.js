import React from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

export default ({
  input,
  meta: { error, touched },
  country,
  label,
  selectState,
  ...rest
}) => (
  <FieldWrapper {...rest} error={error} label={label} touched={touched}>
    <div
      className={cx('state-dropdown', {
        'is-invalid': touched && error,
      })}
    >
      <RegionDropdown
        disableWhenEmpty
        country={country}
        labelType="short"
        valueType="short"
        defaultOptionLabel="-"
        countryValueType="short"
        {...input}
      />
    </div>
  </FieldWrapper>
);
