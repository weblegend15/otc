import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  Element,
  Events,
  scrollSpy,
  scroller,
  animateScroll as scroll,
} from 'react-scroll';
import { IconButton, LoadingContainer } from '../../../../../components';
import { firestore } from '../../../../../configureStore';

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const {
      privateChannel: { channel },
      messageStore,
    } = this.props;

    if (
      prevProps.privateChannel.channel !== channel &&
      Object.keys(channel).length
    ) {
      this.unsubscribe = firestore
        .collection('chats')
        .doc(channel._id)
        .collection('messages')
        .orderBy('created_at', 'desc')
        .limit(10)
        .onSnapshot(messages => {
          let msgs = [];
          messages.forEach(message => {
            msgs.push({ id: message.id, ...message.data() });
          });
          msgs = msgs.reverse();
          messageStore(msgs);
          this.goToContainer = new Promise(resolve => {
            Events.scrollEvent.register('end', () => {
              resolve();
              Events.scrollEvent.remove('end');
            });
            scroller.scrollTo('message-container', {
              duration: 0,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
          });

          this.goToContainer.then(() =>
            this.scrollTo(msgs[msgs.length - 1].id),
          );
        });
      scrollSpy.update();
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'message-container',
    });
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  keypress = e => {
    if (
      e.key === 'Enter' &&
      e.shiftKey === false &&
      e.target.value !== ' ' &&
      e.target.value.length
    ) {
      e.preventDefault();
      this.sendMessage();
      e.target.value = '';
      this.setState({ message: '' });
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

  renderMessages = () => {
    const {
      privateChannel: { loading },
      messageList,
    } = this.props;

    return (
      <LoadingContainer loading={loading && messageList.loading}>
        <Element className="element message-box p-4" id="message-container">
          {messageList.chats.map(msg => (
            <Element name={msg.id} className="p-3" key={msg.id}>
              {msg.text}
            </Element>
          ))}
        </Element>
      </LoadingContainer>
    );
  };

  render() {
    return (
      <div>
        {this.renderMessages()}
        <div className="message-input">
          <div className="p-4">
            <InputGroup>
              <FormControl
                placeholder="New Message"
                className="p-4"
                onChange={this.handleMessageChange}
                onKeyPress={this.keypress}
                as="textarea"
                rows={2}
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

export default Messaging;
