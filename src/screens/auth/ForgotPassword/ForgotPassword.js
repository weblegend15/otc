import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Badge } from '../../../components';

import ForgotPasswordForm from '../../../reduxForms/ForgotPasswordForm';
import ConfirmPasswordForm from '../../../reduxForms/ConfirmPasswordForm';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    const { resetForgotPasswordStep, location } = this.props;
    const query = new URLSearchParams(location.search);
    const step = query.get('token') ? 3 : 1;
    resetForgotPasswordStep(step);
    this.setState({ token: query.get('token') });
  }

  handleResetPasswordSubmit = formData => {
    const { forgotPasswordRequest } = this.props;
    const { email } = formData;
    forgotPasswordRequest(email);
  };

  handleConfirmPasswordSubmit = formData => {
    const { password } = formData;
    const { token } = this.state;
    const { confirmPasswordRequest, email } = this.props;
    confirmPasswordRequest(email, password, token);
  };

  renderStep1 = () => {
    return <ForgotPasswordForm onSubmit={this.handleResetPasswordSubmit} />;
  };

  renderStep2 = () => {
    return (
      <Container className="card">
        <p className="text-center pt-5">
          Please follow the steps below to complete the process:
        </p>
        <Row className="p-5 mx-5">
          <Col sm={12} className="d-flex align-items-center">
            <h4 className="m-0 mr-3">
              <Badge pill variant="primary" as="h4">
                1
              </Badge>
            </h4>
            <span>Go to your email inbox</span>
          </Col>
          <Col sm={12} className="d-flex align-items-center mt-5">
            <h4 className="m-0 mr-3">
              <Badge pill variant="primary" as="h4">
                2
              </Badge>
            </h4>
            <span>Open the confirmation email</span>
          </Col>
          <Col sm={12} className="d-flex align-items-center mt-5">
            <h4 className="m-0 mr-3">
              <Badge pill variant="primary" as="h4">
                3
              </Badge>
            </h4>
            <span>Click the confirmation link</span>
          </Col>
          <Col sm={12} className="d-flex align-items-center mt-5">
            <h4 className="m-0 mr-3">
              <Badge pill variant="primary" as="h4">
                4
              </Badge>
            </h4>
            <span>Set your new password.</span>
          </Col>
        </Row>
      </Container>
    );
  };

  renderStep3 = () => {
    return <ConfirmPasswordForm onSubmit={this.handleConfirmPasswordSubmit} />;
  };

  render() {
    const { step, resetRequestState } = this.props;
    const { token } = this.state;

    return (
      <Container className="password-recovery-steps">
        <Row className="mb-3">
          <Col className="mt-5 text-center">
            <h3 className="auth-form-header">Password Recovery - Step {step} of 3</h3>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            {step === 1 && this.renderStep1()}
            {resetRequestState && step === 2 && this.renderStep2()}
            {token && step === 3 && this.renderStep3()}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ForgotPassword;
