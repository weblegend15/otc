import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SendConfirm from './SendConfirm';
import './SendConfirm.scss';

SendConfirm.propTypes = {
  email: PropTypes.string,
};

SendConfirm.defaultProps = {
  email: '',
};

const mapStateToProps = state => ({
  email: state.auth.email,
});

export default connect(mapStateToProps)(SendConfirm);
