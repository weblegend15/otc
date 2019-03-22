import React, { Component } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { history } from '../../configureStore';
import Salary from '../../assets/icons/salary.svg';
import Security from '../../assets/icons/security.svg';
import Presentation from '../../assets/icons/presentation.svg';
import Bubble from '../../assets/icons/bubble-chat.svg';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signinRequest } = this.props;
    signinRequest(email, password);
  };

  handleChange = fieldName => e => {
    this.setState({
      [fieldName]: e.target.value,
    });
  };

  handleCreateAccount = () => {
    history.push('/signup');
  };

  renderHomeLoginSection = () => {
    return (
      <Row className="home-container-section">
        <Col lg={4} md={6} sm={6} className="login-view">
          <h3 className="h3-title">Login into Your Account</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={this.handleChange('email')}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.handleChange('password')}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button
                className="login-button w-50 mr-3"
                variant="primary"
                size="lg"
                type="submit">
                Login
              </Button>
              <Button
                className="w-50 text-white signup-button d-none ml-3"
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
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col lg={3} md={6} xs={12}>
          <Card className="p-5 mb-5 mx-auto">
            <img src={Security} alt="security" />
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
            <img src={Presentation} alt="presentation" />
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
            <img src={Bubble} alt="bubble" />
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
        <h3 className="h3-title w-100">Some Promo Text Here</h3>
        <p className="p-lg w-100 opacity-5">
          Some expanation on why to create an account on the platform
        </p>
        <Col className="text-center mb-5">
          <Button className="px-5" variant="primary" size="lg">
            Create account
          </Button>
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
