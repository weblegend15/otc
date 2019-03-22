import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';

export default ({ input: { value }, setPhone, label, meta: { error } }) => (
  <div className="form-group">
    {/* eslint-disable */}
    <label className="form-label" id="phone-input-label">
      {label}
    </label>
    {/* eslint-enable */}
    <ReactPhoneInput
      containerClass="react-tel-input"
      defaultCountry="us"
      value={value}
      onChange={e => setPhone(e)}
      enableSearchField
      inputClass={error && 'is-invalid'}
    />
    {error && <div className="d-flex invalid-feedback">{error}</div>}
  </div>
);
