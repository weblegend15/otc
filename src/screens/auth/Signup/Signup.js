import React, { Component } from 'react';
import { FormSection } from 'redux-form';
import SignupOne from './SignupOne';
import SignupTwo from './SignupTwo';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  handleNext = () => {
    this.setState({ currentStep: 2 });
  };

  render() {
    const { currentStep } = this.state;

    return currentStep === 1 ? (
      <FormSection name="stepOne">
        <SignupOne onNext={this.handleNext} />
      </FormSection>
    ) : (
      <FormSection name="stepTwo">
        <SignupTwo />
      </FormSection>
    );
  }
}

export default Signup;
