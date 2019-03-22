import React, { Component } from 'react';
import { Card } from '../../components';

class VerifyEmail extends Component {
  componentDidMount() {
    const { verifyEmailRequest, location } = this.props;
    const query = new URLSearchParams(location.search);
    verifyEmailRequest(query.get('token'));
  }

  render() {
    return <Card className="m-5 p-5 text-center">verify email</Card>;
  }
}

export default VerifyEmail;
