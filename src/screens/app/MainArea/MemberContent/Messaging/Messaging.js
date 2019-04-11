import React, { Component } from 'react';
import Chat from '../../Chat';

class Messaging extends Component {
  render() {
    const {
      privateChannel: { channel },
    } = this.props;

    return Object.keys(channel).length && <Chat chatId={channel._id} />;
  }
}

export default Messaging;
