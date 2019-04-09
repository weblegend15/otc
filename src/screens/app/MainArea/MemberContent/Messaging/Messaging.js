import React, { Component, Fragment } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import _ from 'lodash';
import { Element, scroller } from 'react-scroll';
import {
  IconButton,
  LoadingContainer,
  GeneralAvatar,
  Timestamp,
} from '../../../../../components';
import {
  getMessageServices,
  getInitialMessages,
} from '../../../Services/firebase';
import { MSG_COUNT_LIMIT } from '../../../../../config';
import { getMember } from '../../../../../utils/filterObject';

class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      scrollPosition: 'bottom',
      topRenderMessageId: '',
    };
  }

  componentDidMount() {
    document
      .getElementById('message-container')
      .addEventListener('scroll', _.debounce(this.handleScroll, 300));
  }

  componentDidUpdate(prevProps) {
    const {
      privateChannel: { channel },
      messageStore,
    } = this.props;
    const { scrollPosition, topRenderMessageId } = this.state;

    if (
      prevProps.privateChannel.channel !== channel &&
      Object.keys(channel).length
    ) {
      getInitialMessages(
        channel._id,
        MSG_COUNT_LIMIT,
        messageStore,
        this.scrollTo,
      );
    }
    if (scrollPosition === 'top') {
      this.scrollTo(topRenderMessageId);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    document
      .getElementById('message-container')
      .removeEventListener('scroll', _.debounce(this.handleScroll, 100));
  }

  handleScroll = () => {
    const {
      privateChannel: { channel },
      messageList: { chats },
      getMoreMessages,
    } = this.props;

    const chat = chats[0].id === 'first' ? chats[1] : chats[0];

    const scrollY = document.getElementById('message-container').scrollTop;
    if (scrollY === 0 && chats[0].id !== 'first') {
      this.unsubscribe = getMessageServices(
        chat.created_at,
        MSG_COUNT_LIMIT,
        channel._id,
        getMoreMessages,
      );
      this.setState({
        scrollPosition: 'top',
        topRenderMessageId: chat.id,
      });
    }
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
      selectedGroupId,
      privateChannel: {
        channel: { _id },
      },
      sendMessageRequest,
    } = this.props;

    sendMessageRequest(message, selectedGroupId, _id);
  };

  renderMessage = msg => {
    const {
      members: { list },
    } = this.props;
    const member = getMember(list, msg.sender_id);

    return (
      <Element
        name={msg.id}
        className="p-3 d-flex justify-content-between"
        key={msg.id}
      >
        {msg.type === 'first_message' ? (
          <p className="text-center">{msg.text}</p>
        ) : (
          <Fragment>
            <GeneralAvatar
              data={{ firstName: member.firstName, message: msg.text }}
            />
            <Timestamp
              className="opacity-5"
              timestamp={msg.created_at}
              format="LT"
            />
          </Fragment>
        )}
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
