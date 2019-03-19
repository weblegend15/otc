import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { history } from '../../configureStore';
import Button from '../../components/Buttons/Button';
import Card from '../../components/Card';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, repeatPassword } = this.state;
    const { signinRequest } = this.props;
    // signinRequest(email, password);
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
      <Row className="m-0">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className="mt-5 mb-5 p-5">
            <h3>Login into your account</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>FIRST NAME</Form.Label>
                <Form.Control onChange={this.handleChange('firstName')} type="text" placeholder="Enter First Name" required />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>LAST NAME</Form.Label>
                <Form.Control onChange={this.handleChange('lastName')} type="text" placeholder="Enter Last Name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control onChange={this.handleChange('email')} type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control onChange={this.handleChange('password')} type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group controlId="formRepeatPassword">
                <Form.Label>REPEAT PASSWORD</Form.Label>
                <Form.Control onChange={this.handleChange('repeatPassword')} type="password" placeholder="Repeat Password" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Container className="text-center mt-4">
                <h5>Already have an account?</h5>
                <Link to="/signin">SIGN IN</Link>
              </Container>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Signup;
