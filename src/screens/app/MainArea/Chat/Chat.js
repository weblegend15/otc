import React, { Component } from 'react';
import { Container } from '../../../../components';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <div className="p-2">
          <h1>Hello</h1>
        </div>
        <div className="px-5 py-3" />
      </Container>
    );
  }
}

export default Chat;
