import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  Element,
  Events,
  scroller,
  animateScroll as scroll,
} from 'react-scroll';
import {
  IconButton,
  LoadingContainer,
  GeneralAvatar,
} from '../../../../../components';
import { firestore } from '../../../../../configureStore';
import { getMessageServices } from '../../../Services/firebase';
import { MSG_COUNT_LIMIT } from '../../../../../config';
import getMember from '../../../../../utils/getMember';

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    document
      .getElementById('message-container')
      .addEventListener('scroll', this.handleScroll);
  }

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
        .limit(MSG_COUNT_LIMIT)
        .onSnapshot(messages => {
          let msgs = [];
          if (!messages.empty) {
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
          }
        });
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleScroll = () => {
    const {
      privateChannel: { channel },
      messageList: { chats },
      getMoreMessages,
    } = this.props;

    const scrollY = document.getElementById('message-container').scrollTop;
    if (scrollY === 0) {
      this.unsubscribe = getMessageServices(
        chats[0].created_at,
        MSG_COUNT_LIMIT,
        channel._id,
        getMoreMessages,
      );
      this.scrollTo(chats[0].id);
    }
  };

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

  renderMessage = msg => {
    const {
      members: { list },
    } = this.props;
    const member = getMember(list, msg.sender_id);

    return (
      <Element name={msg.id} className="p-3" key={msg.id}>
        <GeneralAvatar
          data={{ firstName: member.firstName, message: msg.text }}
        />
      </Element>
    );
  };

  renderMessages = () => {
    const {
      privateChannel: { loading },
      messageList,
    } = this.props;
    return (
      <LoadingContainer loading={loading && messageList.loading}>
        <Element className="element message-box p-4" id="message-container">
          {messageList.chats.map(this.renderMessage)}
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
                className="py-3 px-4"
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
                  className="px-4"
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
