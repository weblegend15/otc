import React, { Component } from 'react';
import { Container, Row, Col, TwoFACard } from '../../../../components';

export default class TwoFactorAuth extends Component {
  handleNext = actionType => {
    const {
      signupRequest,
      signupFormValues: { stepOne, stepTwo },
      twoFAData: { data },
    } = this.props;
    const signupData = {
      email: stepOne.email,
      password: stepOne.password,
      firstName: stepOne.firstName,
      lastName: stepOne.lastName,
      phone: stepTwo.phone,
      country: stepTwo.country,
      state: stepTwo.state,
      city: stepTwo.city,
      address1: stepTwo.address1 || '',
      address2: stepTwo.address2 || '',
      googleAuthenticator: actionType === 'proceed' ? data.base32 : null,
    };
    signupRequest(signupData);
  };

  render() {
    const {
      twoFAData: { data, loading },
      signupLoading,
    } = this.props;

    return (
      <Container className="p-0 p-sm-3">
        <Row className="m-0">
          <Col className="px-5 mt-5 text-center">
            <h3 className="auth-form-header d-flex justify-content-center">
              Two-Factor Authentication
            </h3>
          </Col>
        </Row>
        <Row className="m-0 mt-4 mb-5">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <TwoFACard
              onProceed={() => this.handleNext('proceed')}
              onSkip={() => this.handleNext('skip')}
              loading={loading}
              data={data}
              proceeding={signupLoading}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
