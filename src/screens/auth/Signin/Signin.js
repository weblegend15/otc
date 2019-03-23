import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { ValidateInput } from '../../../components';
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
                    component={ValidateInput}
                    type="email"
                    name="email"
                    label="EMAIL"
                    validate={[required, isEmail]}
                  />
                  <Field
                    component={ValidateInput}
                    type="password"
                    name="password"
                    label="PASSWORD"
                    validate={[required]}
                  />
                </Container>
                <hr className="m-0" />
                <Container className="text-center p-5">
                  <Button
                    className="mr-5 px-5"
                    variant="primary"
                    disabled={!!signinFormState.syncErrors || currentUserLoading}
                    type="submit"
                  >
                    LOGIN
                  </Button>
                  <Link className="btn btn-outline-light px-5" to="/auth/signup">
                    Sign up
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
