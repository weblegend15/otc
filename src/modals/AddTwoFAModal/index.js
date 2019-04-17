import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTwoFAModal from './AddTwoFAModal';

import toggleModal from '../redux/actions';
import { confirmTwoFARequest } from '../../screens/auth/redux/actions';

AddTwoFAModal.propTypes = {
  confirmTwoFARequest: PropTypes.func.isRequired,
  twoFAData: PropTypes.object.isRequired,
  isConfirmTwoFA: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
};

AddTwoFAModal.defaultProps = {
  loading: true,
};

const mapStateToProps = state => ({
  twoFAData: state.auth.twoFAData,
  isConfirmTwoFA: state.auth.isConfirmTwoFA,
});

const mapDisaptchToProps = {
  confirmTwoFARequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps,
)(AddTwoFAModal);
