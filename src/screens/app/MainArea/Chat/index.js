import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  sendMessageRequest,
  messageStore,
  addNewMessage,
  getMoreMessages,
  sendFileMessageReqeust,
} from './redux/actions';
import Chat from './Chat';
import './Chat.scss';

Chat.propTypes = {
  sendFileMessageReqeust: PropTypes.func.isRequired,
  chatId: PropTypes.string.isRequired,
  members: PropTypes.object.isRequired,
  messageList: PropTypes.object.isRequired,
  messageStore: PropTypes.func.isRequired,
  getMoreMessages: PropTypes.func.isRequired,
  addNewMessage: PropTypes.func.isRequired,
};

const matStateToProps = state => ({
  messageList: state.app.chats.messageList,
  selectedGroupId: state.app.main.selectedGroupId,
  members: state.app.main.members,
});

const mapDispatchToProps = {
  sendMessageRequest,
  getMoreMessages,
  addNewMessage,
  messageStore,
  sendFileMessageReqeust,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(Chat);
