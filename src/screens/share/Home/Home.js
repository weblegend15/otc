import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Input } from '../../../reduxForms/fields';
import salary from '../../../assets/icons/salary.svg';
import security from '../../../assets/icons/security.svg';
import presentation from '../../../assets/icons/presentation.svg';
import bubbleIcon from '../../../assets/icons/bubbleIcon.svg';
import { required, isEmail } from '../../../utils/validate';

class Home extends Component {
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

  renderSigninForm = () => {
    const { signinFormState, currentUserLoading } = this.props;
    return (
      <Form
        validated={!signinFormState.syncErrors}
        onSubmit={this.handleSubmit}
      >
        <Field
          className="mb-4"
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

        <div className="d-flex justify-content-between">
          <Button
            className="login-button w-50 mr-3 font-weight-bold"
            size="lg"
            variant="primary"
            disabled={!!signinFormState.syncErrors || currentUserLoading}
            type="submit"
          >
            LOGIN
          </Button>
          <Button
            className="w-50 text-white signup-button d-md-none ml-3 font-weight-bold"
            variant="outline-light"
            size="lg"
          >
            Sign up
          </Button>
        </div>
      </Form>
    );
  };

  renderHomeLoginSection = () => {
    const { currentUser } = this.props;
    return (
      <Row className="home-container-section">
        {!currentUser && (
          <Col lg={4} md={6} sm={6} className="login-view ml-md-5">
            <h3 className="mb-4" color="white">
              Login Into Your Account
            </h3>
            {this.renderSigninForm()}
          </Col>
        )}
      </Row>
    );
  };

  renderPlatformFeatures = () => {
    return (
      <Row className="pb-5 platform-features text-center d-flex justify-content-center ">
        <h2 className="my-5 h1-title w-100">Platform Features</h2>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={salary} alt="salary" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={security} alt="security" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={presentation} alt="presentation" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={bubbleIcon} alt="bubble" />
          </Card>
          <h3 className="my-4">Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
      </Row>
    );
  };

  renderCreateAccountSection = () => {
    return (
      <Row className="create-account-section" align="center">
        <h3 className="h3-title w-100 px-2">Some Promo Text Here</h3>
        <p className="px-2 w-100 opacity-5">
          Some expanation on why to create an account on the platform
        </p>
        <Col className="text-center mb-5">
          <Link
            to="/auth/signup"
            className="mt-5 pr-5 pl-5 mx-auto btn btn-primary h4-title font-weight-bold"
          >
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

export default Home;
