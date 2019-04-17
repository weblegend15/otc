import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Security from './Security';

import toggleModal from '../../../../../modals/redux/actions';

import {
  generateTwoFARequest,
  disableTwoFAReqeust,
} from '../../../../auth/redux/actions';

Security.propTypes = {
  currentUser: PropTypes.object.isRequired,
  generateTwoFARequest: PropTypes.func.isRequired,
  disableTwoFAReqeust: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  toggleModal,
  generateTwoFARequest,
  disableTwoFAReqeust,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Security);
