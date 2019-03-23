import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { ValidateInput } from '../../../components';
import Salary from '../../../assets/icons/salary.svg';
import Security from '../../../assets/icons/security.svg';
import Presentation from '../../../assets/icons/presentation.svg';
import Bubble from '../../../assets/icons/bubble-chat.svg';
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

  renderHomeLoginSection = () => {
    const { signinFormState, currentUser } = this.props;
    return (
      <Row className="home-container-section">
        <Col lg={4} md={6} sm={6} className="login-view ml-md-5">
          <h3 color="white">Login Into Your Account</h3>
          <Form validated={!signinFormState.syncErrors} onSubmit={this.handleSubmit}>
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

            <div className="d-flex justify-content-between">
              <Button
                className="login-button w-50 mr-3"
                size="lg"
                variant="primary"
                disabled={!!signinFormState.syncErrors || currentUser.loading}
                type="submit">
                LOGIN
              </Button>
              <Button
                className="w-50 text-white d-md-none ml-3"
                variant="outline-light"
                size="lg">
                Sign up
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  };

  renderPlatformFeatures = () => {
    return (
      <Row className="pb-5 platform-features text-center d-flex justify-content-center ">
        <h2 className="my-5 h2-title w-100">Platform Features</h2>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={Salary} alt="salary" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit eget
            gravida cum. Magna fermentum iaculis eu non diam phasellus. Id diam vel quam
            elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={Security} alt="security" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit eget
            gravida cum. Magna fermentum iaculis eu non diam phasellus. Id diam vel quam
            elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={Presentation} alt="presentation" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit eget
            gravida cum. Magna fermentum iaculis eu non diam phasellus. Id diam vel quam
            elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={Bubble} alt="bubble" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit eget
            gravida cum. Magna fermentum iaculis eu non diam phasellus. Id diam vel quam
            elementum pulvinar etiam non.{' '}
          </p>
        </Col>
      </Row>
    );
  };

  renderCreateAccountSection = () => {
    return (
      <Row className="create-account-section" align="center">
        <h3 className="h3-title w-100">Some Promo Text Here</h3>
        <p className="p-lg w-100 opacity-5">
          Some expanation on why to create an account on the platform
        </p>
        <Col className="text-center mb-5">
          <Link to="/auth/signup" className="mt-2 pr-5 pl-5 mx-auto btn btn-primary">
            CREATE ACCOUNT
          </Link>
        </Col>
      </Row>
    );
  };

  render() {
    return (
      <Container className="home-page-container">
        {this.renderHomeLoginSection()}
        {this.renderPlatformFeatures()}
        {this.renderCreateAccountSection()}
      </Container>
    );
  }
}

export default Signin;
