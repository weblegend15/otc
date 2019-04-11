import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messaging from './Messaging';
import './Messaging.scss';

Messaging.propTypes = {
  privateChannel: PropTypes.object.isRequired,
};

const matStateToProps = state => ({
  privateChannel: state.app.main.privateChannel,
});

export default connect(matStateToProps)(Messaging);
