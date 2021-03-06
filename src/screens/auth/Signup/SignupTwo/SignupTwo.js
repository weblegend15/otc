import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import ReCAPTCHA from 'react-google-recaptcha';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from '../../../../components';

import {
  CountryDropdown,
  StateDropdown,
  PhoneInput,
  Input,
  Checkbox,
} from '../../../../reduxForms/fields';

import { required, phoneRequire } from '../../../../utils/validate';
import { RECAPTCHA_KEY } from '../../../../config';

class SignupTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recaptchaValue: null,
    };
  }

  handleCountryChange = () => {
    const { selectState } = this.props;
    selectState(null);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onNext, generateTwoFARequest } = this.props;
    onNext();
    generateTwoFARequest();
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
      signupFormValues: { stepTwo },
    } = this.props;
    const { recaptchaValue } = this.state;

    return (
      <Container className="p-0 p-sm-3">
        <Row className="m-0">
          <Col className="px-5 mt-5 text-center">
            <h3 className="auth-form-header d-flex justify-content-center">
              Create Account{' '}
              <span className="d-none d-sm-block">&nbsp; - &nbsp; </span>{' '}
              <br className="d-sm-none" />
              Step 2 of 2
            </h3>
          </Col>
        </Row>
        <Row className="m-0 mt-4 mb-5">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form
              className="sign-up-form card m-auto"
              onSubmit={this.handleSubmit}
            >
              <div className="px-sm-5 pb-sm-5 card-body">
                <Field
                  className="my-4"
                  component={PhoneInput}
                  type="phone"
                  name="phone"
                  label="PHONE NUMBER"
                  validate={[phoneRequire]}
                />
                <Field
                  className="mb-4"
                  type="select"
                  name="country"
                  label="COUNTRY"
                  validate={[required]}
                  onChange={this.handleCountryChange}
                  component={CountryDropdown}
                />
                <Row className="mb-4">
                  <Col xs={{ span: 4 }}>
                    <Field
                      type="select"
                      name="state"
                      label="STATE"
                      validate={[required]}
                      component={StateDropdown}
                      {...{ country: stepTwo ? stepTwo.country : '' }}
                    />
                  </Col>
                  <Col xs={{ span: 8 }}>
                    <Field
                      component={Input}
                      type="text"
                      name="city"
                      label="CITY"
                      validate={[required]}
                    />
                  </Col>
                </Row>
                <div className="mb-4">
                  <Field
                    className="mb-3"
                    component={Input}
                    type="text"
                    name="address1"
                    label="ADDRESS"
                  />
                  <Field component={Input} type="text" name="address2" />
                </div>
                <Field
                  className="my-4"
                  name="agreeTerms"
                  type="checkbox"
                  label={this.renderTermsLabel()}
                  component={Checkbox}
                  validate={[required]}
                />

                <ReCAPTCHA
                  className="custom-recaptcha mx-auto mt-4"
                  style={{ width: '304px' }}
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />
              </div>
              <div className="text-center pt-4 px-md-5 pt-md-5 pb-md-4 card-footer card-footer-bg-color">
                <Button
                  block
                  className="mb-4 h4-title font-weight-bold"
                  variant="primary"
                  disabled={
                    !!formSyncErrors.stepTwo || !recaptchaValue || loading
                  }
                  type="submit"
                >
                  SUBMIT
                </Button>
                <p className="pb-2">Create your account</p>
                <Link
                  className="pb-3 d-block w-100 text-center link-size"
                  to="/auth/signin"
                >
                  SIGN IN
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupTwo;
