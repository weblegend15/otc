import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createPrivateChatRequest,
  sendMessageRequest,
  messageStore,
} from '../../redux/actions';
import Messaging from './Messaging';
import './Messaging.scss';

Messaging.propTypes = {
  privateChannel: PropTypes.object,
  messageStore: PropTypes.func.isRequired,
};

const matStateToProps = state => ({
  privateChannel: state.app.main.privateChannel,
  messageList: state.app.main.messageList,
});

const mapDispatchToProps = {
  createPrivateChatRequest,
  sendMessageRequest,
  messageStore,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(Messaging);
