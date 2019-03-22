import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import ReCAPTCHA from 'react-google-recaptcha';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../../../components/Buttons/Button';
import {
  ValidateInput,
  ValidateCheck,
  Card,
  CountryDropdown,
  StateDropdown,
  PhoneInput,
} from '../../../components';

import { required, phoneRequire } from '../../../utils/validate';
import { RECAPTCHA_KEY } from '../../../config';

class SignupTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recaptchaValue: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const {
      signupRequest,
      signupFormValues: { stepOne, stepTwo },
    } = this.props;

    const signupData = {
      email: stepOne.email,
      password: stepOne.password,
      firstName: stepOne.firstName,
      lastName: stepOne.firstName,
      phone: stepTwo.phone,
      country: stepTwo.country,
      state: stepTwo.state,
      city: stepTwo.city,
      address1: stepTwo.address1 || '',
      address2: stepTwo.address2 || '',
    };

    signupRequest(signupData);
  };

  handleRecaptcha = value => {
    this.setState({ recaptchaValue: value });
  };

  renderTermsLabel = () => (
    <div>
      I agree to the{' '}
      <Link to="/terms" target="_blank">
        Terms and Conditions
      </Link>
    </div>
  );

  render() {
    const {
      formSyncErrors,
      loading,
      selectCountry,
      selectState,
      setPhone,
      signupFormValues: { stepTwo },
    } = this.props;
    const { recaptchaValue } = this.state;

    return (
      <Container>
        <Row>
          <Col className="mt-5 text-center">
            <h3>Create Account - Step 2 of 2</h3>
          </Col>
        </Row>
        <Row className="m-0">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Card className="mt-4 mb-5">
              <Form onSubmit={this.handleSubmit}>
                <Container className="p-5">
                  <Field
                    component={PhoneInput}
                    type="phone"
                    name="phone"
                    label="PHONE NUMBER"
                    validate={[phoneRequire]}
                    {...{ setPhone }}
                  />
                  <Field
                    type="select"
                    name="country"
                    label="COUNTRY"
                    validate={[required]}
                    component={CountryDropdown}
                    {...{ selectCountry }}
                  />
                  <Row>
                    <Col xs={{ span: 4 }}>
                      <Field
                        type="select"
                        name="state"
                        label="STATE"
                        validate={[required]}
                        component={StateDropdown}
                        {...{
                          selectState,
                          country: stepTwo ? stepTwo.country : '',
                        }}
                      />
                    </Col>
                    <Col xs={{ span: 8 }}>
                      <Field
                        component={ValidateInput}
                        type="text"
                        name="city"
                        label="CITY"
                        validate={[required]}
                      />
                    </Col>
                  </Row>
                  <div className="mb-4">
                    <Field
                      component={ValidateInput}
                      type="text"
                      name="address1"
                      label="ADDRESS"
                    />
                    <Field
                      component={ValidateInput}
                      type="text"
                      name="address2"
                    />
                  </div>
                  <Field
                    name="agreeTerms"
                    type="checkbox"
                    label={this.renderTermsLabel()}
                    component={ValidateCheck}
                    validate={[required]}
                  />

                  <ReCAPTCHA
                    className="custom-recaptcha mx-auto mt-4"
                    style={{ width: '304px' }}
                    sitekey={RECAPTCHA_KEY}
                    onChange={this.handleRecaptcha}
                  />
                </Container>
                <hr className="m-0" />
                <Container className="text-center p-5">
                  <Button
                    block
                    className="mb-5"
                    variant="primary"
                    disabled={
                      !!formSyncErrors.stepTwo || !recaptchaValue || loading
                    }
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                  <p>Already have an account?</p>
                  <Link to="/signin">SIGN IN</Link>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupTwo;
