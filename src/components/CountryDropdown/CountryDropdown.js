import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import cx from 'classnames';

export default ({
  input: { value },
  meta: { touched, error },
  label,
  selectCountry,
}) => (
  <div className="form-group country-dropdown">
    <label className="form-label" id="country-dropdown-label">
      {label}
    </label>
    <CountryDropdown
      className={cx('form-control', { 'is-invalid': error })}
      value={value}
      priorityOptions={['US']}
      onChange={e => selectCountry(e)}
    />
    {error && touched && <div className="d-flex invalid-feedback">{error}</div>}
  </div>
);
