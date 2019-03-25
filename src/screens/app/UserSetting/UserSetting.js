import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from '../../../components';

class UserSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Card>left</Card>
        <Card>User Setting</Card>
      </Container>
    );
  }
}

export default UserSetting;
