import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import cx from 'classnames';
import FieldWrapper from '../FieldWrapper';

class CountryDropdo extends Component {
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
      label,
      selectCountry,
      ...rest
    } = this.props;
    const { isBlur } = this.state;

    return (
      <FieldWrapper error={error} label={label} {...rest}>
        <CountryDropdown
          className={cx('form-control', { 'is-invalid': error && isBlur })}
          value={value}
          priorityOptions={['US']}
          onChange={onChange}
          onBlur={this.handleBlur}
          autoFocus={false}
        />
      </FieldWrapper>
    );
  }
}

export default CountryDropdo;
