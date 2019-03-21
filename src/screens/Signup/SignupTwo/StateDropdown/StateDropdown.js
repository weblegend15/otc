import React, { Component } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';

class StateDropdown extends Component {
  handleChange = value => {
    const { selectState } = this.props;
    selectState(value);
  };

  render() {
    const {
      stepTwoValues: { country, state },
      meta: { error },
    } = this.props;

    return (
      <div className="form-group state-dropdown">
        {/* eslint-disable */}
        <label className="form-label" id="state-dropdown-label">
          STATE
        </label>
        {/* eslint-enable */}
        <RegionDropdown
          className={cx('form-control', { 'is-invalid': !state })}
          disableWhenEmpty
          country={country}
          value={state}
          onChange={this.handleChange}
          labelType="short"
          valueType="short"
        />
        {country && error && (
          <div className="d-flex invalid-feedback">{error}</div>
        )}
      </div>
    );
  }
}

export default StateDropdown;
