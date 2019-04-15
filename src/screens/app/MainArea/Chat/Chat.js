import React, { Component, Fragment } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import debounce from 'lodash/debounce';
import moment from 'moment';
import { Element, scroller } from 'react-scroll';
import {
  IconButton,
  LoadingContainer,
  PureAvatar,
  Icon,
  Card,
  Form,
  Timestamp,
} from '../../../../components';
import { getMessagesService, getNewMessage } from '../../Services/firebase';
import { MSG_COUNT_LIMIT } from '../../../../config';
import { findByField } from '../../../../utils/filterObject';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      sent: false,
      file: null,
    };
  }

  componentDidMount() {
    const { chatId, messageStore, addNewMessage } = this.props;
    getMessagesService(
      parseInt(moment().format('x'), 10),
      chatId,
      MSG_COUNT_LIMIT,
      messageStore,
      this.scrollTo,
    );

    this.unsubscribe = getNewMessage(chatId, addNewMessage);

    document
      .getElementById('message-container')
      .addEventListener('scroll', debounce(this.handleScroll, 500));
  }

  componentDidUpdate(prevProps) {
    const {
      messageList: { chats },
    } = this.props;
    const { sent } = this.state;
    if (chats !== prevProps.messageList.chats && sent) {
      this.scrollTo(chats[chats.length - 1].id);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    document
      .getElementById('message-container')
      .removeEventListener('scroll', debounce(this.handleScroll, 500));
  }

  getFileExtension = filename =>
    filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2); // eslint-disable-line

  handleScroll = () => {
    const {
      chatId,
      messageList: { chats },
      getMoreMessages,
    } = this.props;

    if (document.getElementById('message-container')) {
      const scrollY = document.getElementById('message-container').scrollTop;
      this.setState({ sent: false });
      if (scrollY === 0 && chats[0].id !== 'first') {
        getMessagesService(
          chats[0].created_at,
          chatId,
          MSG_COUNT_LIMIT,
          getMoreMessages,
        );
        this.scrollTo(chats[0].id);
      }
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
    const { message, file } = this.state;
    const {
      selectedGroupId,
      chatId,
      sendMessageRequest,
      sendFileMessageReqeust,
    } = this.props;

    this.setState({ sent: true });
    if (file) {
      sendFileMessageReqeust(selectedGroupId, chatId, message, file, file.name);
      this.setState({ message: '', file: null });
    } else {
      sendMessageRequest(message, selectedGroupId, chatId);
    }
  };

  diffDay = (current, prev) => {
    const standardMessageDate = moment(current).format('ll');
    const prevMessageDate = moment(prev).format('ll');
    return moment(standardMessageDate).diff(moment(prevMessageDate), 'days');
  };

  fileLoad = () => e => {
    this.setState({ file: e.target.files[0] });
  };

  renderFile = (filetype, filename, msg) => {
    const types = ['bmp', 'jpg', 'jpeg', 'png', 'gif'];
    return types.indexOf(filetype) > -1 ? (
      <Fragment>
        <b className="pt-2">{filename}</b>
        <img src={msg.url} className="file-messege-size" alt="file-message" />
      </Fragment>
    ) : (
      <Card className="p-3 d-inline-flex">
        <Card.Body className="d-flex align-items-center">
          <Icon name="file-o" size="3x" />
          <b className="ml-3">{filetype.toUpperCase()} file</b>
        </Card.Body>
        <Card.Footer className="card-footer-bg-color border-0">
          <p>{filename}</p>
        </Card.Footer>
      </Card>
    );
  };

  renderMessage = (msg, index, messages) => {
    const {
      members: { list },
    } = this.props;
    const member = findByField(list, '_id', msg.sender_id);
    let diffDay = 0;
    let filetype = '';

    if (index > 1) {
      diffDay = this.diffDay(msg.created_at, messages[index - 1].created_at);
    }

    if (msg.extra && msg.extra.file.name) {
      filetype = this.getFileExtension(msg.extra.file.name);
    }

    return (
      <Element name={msg.id} key={msg.id}>
        {msg.type === 'first_message' || !member ? (
          <p className="text-center my-4">{msg.text}</p>
        ) : (
          <Fragment>
            {diffDay > 0 && (
              <Timestamp
                className="opacity-5 w-100 my-3 border-bottom pl-3 p-sm"
                timestamp={msg.created_at}
                format="dddd, MMMM DD, YYYY"
              />
            )}
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex">
                <PureAvatar />
                <div className="d-flex flex-column align-items-start">
                  <p className="font-weight-semibold h4-title">
                    {member.firstName}
                  </p>
                  <p className="mt-1">{msg.text}</p>
                  {msg.extra &&
                    msg.extra.file.name &&
                    this.renderFile(filetype, msg.extra.file.name, msg)}
                </div>
              </div>
              <Timestamp
                className="opacity-5"
                timestamp={msg.created_at}
                format="LT"
              />
            </div>
          </Fragment>
        )}
      </Element>
    );
  };

  renderMessages = () => {
    const { messageList } = this.props;

    return (
      <LoadingContainer loading={messageList.loading}>
        <Element className="element message-box p-1" id="message-container">
          {messageList.chats.map(this.renderMessage)}
        </Element>
      </LoadingContainer>
    );
  };

  render() {
    const { message, file } = this.state;

    return (
      <div>
        {this.renderMessages()}
        <div className="message-input p-4">
          <InputGroup>
            <FormControl
              placeholder="New Message"
              className="py-3 px-4"
              value={message}
              onChange={this.handleMessageChange}
              onKeyPress={this.keypress}
              as="textarea"
              rows={3}
              aria-label="With textarea"
            />
            <div className="buttons">
              <InputGroup.Prepend>
                <IconButton
                  onClick={this.sendMessage}
                  icon="long-arrow-right"
                  iconSize="2x"
                  className="px-4"
                  buttonClassName="rounded-0 send-message"
                />
              </InputGroup.Prepend>
              <InputGroup.Prepend>
                {file ? (
                  <IconButton
                    disabled
                    icon="times"
                    iconSize="2x"
                    className="px-4"
                    buttonClassName="rounded-0 m-0 file-upload w-100"
                  />
                ) : (
                  <Form.Label className="rounded-0 m-0 btn btn-primary file-upload w-100">
                    <Icon name="paperclip" size="lg" className="rotate-icon" />
                    <input
                      type="file"
                      className="d-none"
                      onChange={this.fileLoad()}
                    />
                  </Form.Label>
                )}
              </InputGroup.Prepend>
            </div>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Chat;
