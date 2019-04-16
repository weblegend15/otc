import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import TwoFactorAuth from './TwoFactorAuth';

import { signupRequest } from '../../redux/actions';

TwoFactorAuth.propTypes = {
  twoFAData: PropTypes.object.isRequired,
  signupFormValues: PropTypes.object,
  signupLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  signupLoading: state.auth.loading,
  twoFAData: state.auth.twoFAData,
  signupFormValues: getFormValues('signupForm')(state),
});

const mapDispatchToProps = {
  signupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TwoFactorAuth);
