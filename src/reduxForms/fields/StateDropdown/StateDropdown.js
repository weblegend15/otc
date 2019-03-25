import React, { Component } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

class StateDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlur: false,
    };
  }

  handleBlur = () => {
    this.setState({ isBlur: true });
  };

  render() {
    const {
      input: { value, onChange },
      meta: { error },
      country,
      label,
      selectState,
      ...rest
    } = this.props;
    const { isBlur } = this.state;
    return (
      <FieldWrapper error={error} label={label} {...rest}>
        <RegionDropdown
          className={cx('form-control', { 'is-invalid': !value && isBlur })}
          disableWhenEmpty
          country={country}
          value={value}
          onChange={onChange}
          labelType="short"
          valueType="short"
          defaultOptionLabel="Select State"
          onBlur={this.handleBlur}
        />
      </FieldWrapper>
    );
  }
}

export default StateDropdown;
