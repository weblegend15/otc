import React from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from '../../../components';

export default ({ email }) => (
  <Container className="text-center">
    <h3 className="mt-5">Thank you for your registration</h3>
    <h6 className="mt-5 mb-0 font-weight-light">
      Just a few more steps more required
    </h6>
    <Card className="mx-5 my-4">
      <h4 className="m-5 text-primary">
        Please confirm and activate your account
      </h4>
      <hr className="m-0" />
      <p className="m-4">
        Check your email and click on the activation link in the email which we
        have sent to <div className="text-primary">asdf{email}</div>
      </p>
    </Card>
  </Container>
);
