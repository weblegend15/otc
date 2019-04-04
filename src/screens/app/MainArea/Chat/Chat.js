import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, IconButton } from '../../../../components';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { groupId, userId },
      },
      createPrivateChatRequest,
    } = this.props;
    if (userId) {
      createPrivateChatRequest(userId, groupId);
    }
  }

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  keypress = e => {
    if (e.key === 'Enter' && e.shiftKey === false && e.target.value.length) {
      e.preventDefault();
      this.sendMessage();
      e.target.value = '';
    }
  };

  sendMessage = () => {
    const { message } = this.state;
    const {
      match: {
        params: { groupId },
      },
      privateChannel: {
        channel: { _id },
      },
      sendMessageRequest,
    } = this.props;

    sendMessageRequest(message, groupId, _id);
  };

  render() {
    return (
      <div>
        <Container>
          <div className="p-2">
            <h1>Hello</h1>
          </div>
        </Container>
        <div className="message-input">
          <div className="p-4">
            <InputGroup>
              <FormControl
                placeholder="New Message"
                className="p-4"
                onChange={this.handleMessageChange}
                onKeyPress={this.keypress}
                as="textarea"
                rows={3}
                aria-label="With textarea"
              />
              <InputGroup.Prepend>
                <IconButton
                  onClick={this.sendMessage}
                  icon="long-arrow-right"
                  iconSize="2x"
                  className="px-3"
                  buttonClassName="rounded-right"
                />
              </InputGroup.Prepend>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
