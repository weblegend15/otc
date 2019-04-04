import React, { Component } from 'react';
import { LoadingContainer } from '../../../../components';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LoadingContainer>
        <div className="p-2 message-show-section">
          <h1>Hello</h1>
        </div>
        <div className="px-5 py-3" />
      </LoadingContainer>
    );
  }
}

export default Chat;
