import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createPrivateChatRequest,
  sendMessageRequest,
  messageStore,
  getMoreMessages,
} from '../../redux/actions';
import Messaging from './Messaging';
import './Messaging.scss';

Messaging.propTypes = {
  privateChannel: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  messageList: PropTypes.object.isRequired,
  messageStore: PropTypes.func.isRequired,
  getMoreMessages: PropTypes.func.isRequired,
};

const matStateToProps = state => ({
  privateChannel: state.app.main.privateChannel,
  messageList: state.app.main.messageList,
  members: state.app.main.members,
});

const mapDispatchToProps = {
  createPrivateChatRequest,
  sendMessageRequest,
  getMoreMessages,
  messageStore,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(Messaging);
