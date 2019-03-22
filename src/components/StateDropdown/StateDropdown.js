import React, { Component } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';

class StateDropdown extends Component {
  componentDidMount() {
    const { selectState } = this.props;
    selectState(null);
  }

  componentDidUpdate(prevProps) {
    const { country, selectState } = this.props;
    if (prevProps.country !== country) {
      selectState(null);
    }
  }

  render() {
    const {
      input: { value },
      meta: { error },
      country,
      label,
      selectState,
    } = this.props;

    return (
      <div className="form-group state-dropdown">
        {/* eslint-disable */}
        <label className="form-label" id="state-dropdown-label">
          {label}
        </label>
        {/* eslint-enable */}
        <RegionDropdown
          className={cx('form-control', { 'is-invalid': !value })}
          disableWhenEmpty
          country={country}
          value={value}
          onChange={e => selectState(e)}
          labelType="short"
          valueType="short"
          defaultOptionLabel="Select State"
        />
        {country && error && (
          <div className="d-flex invalid-feedback">{error}</div>
        )}
      </div>
    );
  }
}

export default StateDropdown;
