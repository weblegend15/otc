import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../../components';

class VerifyEmail extends Component {
  componentDidMount() {
    const { verifyEmailRequest, location } = this.props;
    const query = new URLSearchParams(location.search);
    verifyEmailRequest(query.get('token'));
  }

  render() {
    return (
      <Container className="text-center">
        <h3 className="my-4">Verify Email</h3>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="text-center">
              <Link className="m-4" to="/auth/signin">
                SIGN IN
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VerifyEmail;
