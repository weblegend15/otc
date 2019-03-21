import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormSyncErrors, getFormValues } from 'redux-form';

import SignupTwo from './SignupTwo';

import { signupRequest } from '../redux/actions';

SignupTwo.propTypes = {
  formSyncErrors: PropTypes.object,
  signupRequest: PropTypes.func,
  loading: PropTypes.bool,
};

SignupTwo.defaultProps = {
  formSyncErrors: {},
  signupRequest: () => {},
  loading: false,
};

const mapStateToProps = state => ({
  signupFormValues: getFormValues('signupForm')(state),
  formSyncErrors: getFormSyncErrors('signupForm')(state),
  loading: state.signup.loading,
});

const mapDispatchToProps = {
  signupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupTwo);
