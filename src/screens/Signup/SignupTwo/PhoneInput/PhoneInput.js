import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';

class PhoneInput extends Component {
  handleInputChange = number => {
    const { setPhone } = this.props;
    setPhone(number);
  };

  render() {
    const { stepTwoValues } = this.props;

    return (
      <div className="form-group">
        {/* eslint-disable */}
        <label className="form-label" id="phone-input-label">
          PHONE NUMBER
        </label>
        {/* eslint-enable */}
        <ReactPhoneInput
          containerClass="react-tel-input"
          defaultCountry="us"
          value={stepTwoValues.phone}
          onChange={this.handleInputChange}
          enableSearchField
        />
      </div>
    );
  }
}

export default PhoneInput;
