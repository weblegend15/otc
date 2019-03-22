import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../components/Buttons/Button';

import { ValidateInput, Card } from '../../../components';
import {
  required,
  minLength,
  isEmail,
  confirmation,
} from '../../../utils/validate';

class SignupOne extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { onNext } = this.props;
    onNext();
  };

  render() {
    const { formSyncErrors } = this.props;

    return (
      <Container>
        <Row>
          <Col className="mt-5 text-center">
            <h3>Create Account - Step 1 of 2</h3>
          </Col>
        </Row>
        <Row className="m-0">
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Card className="mt-4 mb-5">
              <Form
                validated={!formSyncErrors.stepOne}
                onSubmit={this.handleSubmit}
              >
                <Container className="p-5">
                  <Field
                    component={ValidateInput}
                    type="text"
                    name="firstName"
                    label="FIRST NAME"
                    validate={[required]}
                  />
                  <Field
                    component={ValidateInput}
                    type="text"
                    name="lastName"
                    label="LAST NAME"
                    validate={[required]}
                  />
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
                    validate={[required, minLength]}
                  />
                  <Field
                    component={ValidateInput}
                    type="password"
                    name="repeatPassword"
                    label="REPEAT PASSWORD"
                    validate={[required, confirmation]}
                  />
                </Container>
                <hr className="m-0" />
                <Container className="text-center p-5">
                  <Button
                    block
                    className="mb-5"
                    variant="primary"
                    disabled={!!formSyncErrors.stepOne}
                    type="submit"
                  >
                    CONTINUE
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

export default SignupOne;
