import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Button } from '../../../components';

import { Input } from '../../../reduxForms/fields';
import { required, isEmail } from '../../../utils/validate';

class Signin extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const {
      signinRequest,
      signinFormState: {
        values: { email, password },
      },
    } = this.props;

    signinRequest(email, password);
  };

  render() {
    const { signinFormState, currentUserLoading } = this.props;
    return (
      <Container className="mt-5">
        <Row>
          <Col className="p-0 p-sm-3 text-center">
            <h3 className="auth-form-header">Login Into Your Account</h3>
          </Col>
        </Row>
        <Row className="m-0 mt-4 mb-5">
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            className="p-0"
          >
            <Form
              className="card login-form m-auto"
              validated={!signinFormState.syncErrors}
              onSubmit={this.handleSubmit}
            >
              <div className="px-md-5 pb-md-5 card-body">
                <Field
                  className="mb-4 my-md-4"
                  component={Input}
                  type="email"
                  name="email"
                  label="EMAIL"
                  validate={[required, isEmail]}
                />
                <Field
                  className="mb-2 mb-md-0"
                  component={Input}
                  type="password"
                  name="password"
                  label="PASSWORD"
                  validate={[required]}
                />
              </div>
              <div className="text-center pt-4 px-md-5 pt-md-5 pb-md-4 card-footer form-footer">
                <Button
                  className="mr-5 px-5 mb-4 btn-block font-weight-bold h4-title"
                  disabled={!!signinFormState.syncErrors || currentUserLoading}
                  type="submit"
                >
                  LOGIN
                </Button>
                <p className="pb-2">Create your account</p>
                <Link
                  className="pb-3 d-block w-100 text-center link-size"
                  to="/auth/signup"
                >
                  SIGN UP
                </Link>
                <Link
                  className="w-100 text-center link-size"
                  to="/auth/reset-password"
                >
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

export default Signin;
