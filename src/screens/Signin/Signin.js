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
        <Col md={{ span: 3 }} className="login-view">
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

            <Button
              className="login-button"
              variant="primary"
              size="lg"
              type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    );
  };

  renderPlatformFeatures = () => {
    return (
      <Row className="platform-features" align="center">
        <h2 className="h2-title w-100">Platform Features</h2>
        <Col sm={3} align="center">
          <Card>
            <img src={Salary} alt="salary" />
          </Card>
          <h3>Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col sm={3} align="center">
          <Card>
            <img src={Security} alt="security" />
          </Card>
          <h3>Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col sm={3} align="center">
          <Card>
            <img src={Presentation} alt="presentation" />
          </Card>
          <h3>Need Content Here</h3>
          <p className="p-md opacity-5">
            Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit
            eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id
            diam vel quam elementum pulvinar etiam non.{' '}
          </p>
        </Col>
        <Col sm={3} align="center">
          <Card>
            <img src={Bubble} alt="bubble" />
          </Card>
          <h3>Need Content Here</h3>
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
        <Col sm={{ span: 4, offset: 4 }}>
          <Button className="create-account-button" variant="primary" size="lg">
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
