import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from '../../../../components';
import { Input } from '../../../../reduxForms/fields';
import { required, minLength, isEmail, confirmation } from '../../../../utils/validate';

class SignupOne extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { onNext } = this.props;
    onNext();
  };

  render() {
    const { formSyncErrors } = this.props;

    return (
      <Container className="p-0 p-sm-3">
        <Row>
          <Col className="px-5 mt-5 text-center">
            <h3 className="auth-form-header d-flex justify-content-center">
              Create Account <span className="d-none d-sm-block">&nbsp; - &nbsp; </span>{' '}
              <br className="d-sm-none" />
              Step 1 of 2
            </h3>
          </Col>
        </Row>
        <Row className="m-0 mt-4 mb-5">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form
              className="sign-up-form card m-auto"
              validated={!formSyncErrors.stepOne}
              onSubmit={this.handleSubmit}
            >
              <div className="px-sm-5 pb-sm-5 card-body">
                <Field
                  component={Input}
                  type="text"
                  name="firstName"
                  label="FIRST NAME"
                  validate={[required]}
                />
                <Field
                  component={Input}
                  type="text"
                  name="lastName"
                  label="LAST NAME"
                  validate={[required]}
                />
                <Field
                  component={Input}
                  type="email"
                  name="email"
                  label="EMAIL"
                  validate={[required, isEmail]}
                />
                <Field
                  component={Input}
                  type="password"
                  name="password"
                  label="PASSWORD"
                  validate={[required, minLength]}
                />
                <Field
                  component={Input}
                  type="password"
                  name="repeatPassword"
                  label="REPEAT PASSWORD"
                  validate={[required, confirmation]}
                />
              </div>
              <div className="text-center px-sm-5 pt-sm-5 pb-sm-3 card-footer card-footer-bg-color">
                <Button
                  block
                  className="mb-5"
                  variant="primary"
                  disabled={!!formSyncErrors.stepOne}
                  type="submit"
                >
                  CONTINUE
                </Button>
                <p className="pb-2">Already have an account?</p>
                <Link
                  className="pb-3 d-block w-100 text-center link-size"
                  to="/auth/signin"
                >
                  SIGN IN
                </Link>
                <Link className="w-100 text-center link-size" to="/auth/reset-password">
                  FORGOT PASSWORD?
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupOne;
