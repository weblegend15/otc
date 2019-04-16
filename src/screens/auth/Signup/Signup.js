import React, { Component } from 'react';
import { FormSection } from 'redux-form';
import SignupOne from './SignupOne';
import SignupTwo from './SignupTwo';
import TwoFactorAuth from './TwoFactorAuth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  handleNext = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep + 1 });
  };

  render() {
    const { currentStep } = this.state;

    if (currentStep === 1) {
      return (
        <FormSection name="stepOne">
          <SignupOne onNext={this.handleNext} />
        </FormSection>
      );
    }
    if (currentStep === 2) {
      return (
        <FormSection name="stepTwo">
          <SignupTwo onNext={this.handleNext} />
        </FormSection>
      );
    }
    return <TwoFactorAuth />;
  }
}

export default Signup;
