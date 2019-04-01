import React from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from '../../../components';

export default ({ email }) => (
  <Container className="text-center mb-5">
    <h3 className="mt-5 auth-form-header">Thank you for your registration</h3>
    <p className="mt-4 mb-3 font-weight-light sub-title">
      Just a few more steps required
    </p>
    <Card className="m-auto send-confirm">
      <Card.Body>
        <p className="m-4 h3-title text-primary">
          Please confirm and activate your account
        </p>
      </Card.Body>
      <Card.Footer className="card-footer-bg-color">
        <div className="m-md-2 py-4 p-lg">
          Check your email and click on the activation link in the email which we have
          sent to <p className="p-lg m-0 pt-2 text-primary">{email}</p>
        </div>
      </Card.Footer>
    </Card>
  </Container>
);
