import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Card, Button } from '../../../components';

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
      <Container>
        <Row>
          <Col className="mt-5 text-center">
            <h3>Login Into Your Account</h3>
          </Col>
        </Row>
        <Row className="m-0">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Card className="mt-4 mb-5">
              <Form validated={!signinFormState.syncErrors} onSubmit={this.handleSubmit}>
                <Container className="p-5">
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
                    validate={[required]}
                  />
                </Container>
                <hr className="m-0" />
                <Container className="text-center p-5">
                  <Button
                    className="mr-5 px-5 mb-5 btn-block"
                    disabled={!!signinFormState.syncErrors || currentUserLoading}
                    type="submit"
                  >
                    LOGIN
                  </Button>
                  <h4 className="pb-1">Create your account</h4>
                  <Link className="pb-3 d-block w-100 text-center" to="/auth/signup">
                    SIGN UP
                  </Link>
                  <Link className="w-100 text-center" to="/auth/reset-password">
                    FORGOT PASSWORD?
                  </Link>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signin;
