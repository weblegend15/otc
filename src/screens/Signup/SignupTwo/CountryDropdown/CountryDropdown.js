import React, { Component } from 'react';
import { CountryDropdown as CountrySelector } from 'react-country-region-selector';
import cx from 'classnames';

class CountryDropdown extends Component {
  handleChange = value => {
    const { selectCountry } = this.props;
    selectCountry(value);
  };

  render() {
    const {
      stepTwoValues: { country },
      meta: { touched, error },
    } = this.props;

    return (
      <div className="form-group country-dropdown">
        {/* eslint-disable */}
        <label className="form-label" id="country-dropdown-label">
          COUNTRY
        </label>
        {/* eslint-enable */}
        <CountrySelector
          className={cx('form-control', { 'is-invalid': error })}
          value={country}
          priorityOptions={['US']}
          onChange={this.handleChange}
        />
        {error && touched && (
          <div className="d-flex invalid-feedback">{error}</div>
        )}
      </div>
    );
  }
}

export default CountryDropdown;
