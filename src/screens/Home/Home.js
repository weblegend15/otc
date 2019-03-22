import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card';
import Button from '../../components/Buttons/Button';
import { history } from '../../configureStore';

class Home extends Component {
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

  renderHomeLonginSection = () => (
    <Row className="mx-0 home-login-view">
      <Col md={{ span: 4 }} className="ml-5">
        <h3 color="white">Login into your account</h3>
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

          <Button variant="primary" type="submit" className="mt-3">
            <span className="mr-5 ml-5">LOGIN</span>
          </Button>
        </Form>
      </Col>
    </Row>
  );

  renderPlatformFeaturesSection = () => (
    <Row>
      <div className="d-flex flex-column">
        <h1> Platform Features </h1>
      </div>
    </Row>
  );

  renderHomeLoginSection = () => {
    return (
      <div>
        {this.renderHomeLonginSection()}
        {this.renderPlatformFeaturesSection()}
      </div>
    );
  };

  render() {
    return (
      <Container className="mw-100 h-50 pt-5 home-container-section">
        {this.renderHomeLoginSection()}
      </Container>
    );
  }
}

export default Home;
