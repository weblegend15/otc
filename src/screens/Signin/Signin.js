import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/Buttons/Button';

import CustomInput from './CustomInput';

class Signin extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const {
      signinRequest,
      signinFormState: {
        values: { email, password },
      },
    } = this.props;

    signinRequest(email, password);
  }

  render() {
    const { signinFormState, currentUser } = this.props;

    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={{ span: 4 }}>
            <h3 color="white">Login into your account</h3>
            <Form validated={!signinFormState.syncErrors} onSubmit={this.handleSubmit}>
              <Field component={CustomInput} type="email" name="email" label="EMAIL" />
              <Field component={CustomInput} type="password" name="password" label="PASSWORD" />
              <Button
                variant="primary"
                disabled={!!signinFormState.syncErrors || currentUser.loading}
                type="submit"
              >
                LOGIN
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Link to="/signup" className="mt-5 mx-auto btn btn-primary">
            CREATE ACCOUNT
          </Link>
        </Row>
      </Container>
    );
  }
}

export default Signin;
