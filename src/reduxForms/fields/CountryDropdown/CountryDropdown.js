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
    <div
      className={cx('country-dropdown', {
        'is-invalid': error && touched,
      })}
    >
      <CountryDropdown
        priorityOptions={['US']}
        autoFocus={false}
        valueType="short"
        defaultOptionLabel="-"
        {...input}
      />
    </div>
  </FieldWrapper>
);
