import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPrivateChatRequest, sendMessageRequest } from '../redux/actions';
import Chat from './Chat';
import './Chat.scss';

Chat.propTypes = {
  privateChannel: PropTypes.object,
};

const matStateToProps = state => ({
  privateChannel: state.app.main.privateChannel,
});

const mapDispatchToProps = {
  createPrivateChatRequest,
  sendMessageRequest,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(Chat);
