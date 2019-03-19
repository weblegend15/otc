import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { history } from '../../configureStore';
import Button from '../../components/Buttons/Button';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signinRequest } = this.props;
    signinRequest(email, password);
  }

  handleChange = (fieldName) => (e) => {
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  handleCreateAccount = () => {
    history.push('/signup');
  }


  render() {
    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={{ span: 4 }}>
            <h3 color="white">Login into your account</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleChange('email')} type="email" placeholder="Enter email" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange('password')} type="password" placeholder="Password" required/>
              </Form.Group>

              <Button variant="primary" type="submit">
              Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Button className="mt-5 mx-auto" onClick={this.handleCreateAccount}>CREATE ACCOUNT</Button>
        </Row>
      </Container>
    );
  }
}

export default Signin;
