import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  sendMessageRequest,
  messageStore,
  addNewMessage,
  getMoreMessages,
  getNewOffer,
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
  getNewOffer: PropTypes.func.isRequired,
};

const matStateToProps = state => ({
  messageList: state.app.chats.messageList,
  selectedGroupId: state.app.main.selectedGroupId,
  members: state.app.main.members,
  newOffer: state.app.chats.newOffer,
});

const mapDispatchToProps = {
  sendMessageRequest,
  getMoreMessages,
  addNewMessage,
  messageStore,
  getNewOffer,
  sendFileMessageReqeust,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(Chat);
