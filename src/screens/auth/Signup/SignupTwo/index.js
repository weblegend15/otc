import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormSyncErrors, getFormValues, change } from 'redux-form';

import SignupTwo from './SignupTwo';

import { signupRequest } from '../../redux/actions';

SignupTwo.propTypes = {
  signupFormValues: PropTypes.object,
  formSyncErrors: PropTypes.object,
  loading: PropTypes.bool,
  signupRequest: PropTypes.func.isRequired,
  selectState: PropTypes.func.isRequired,
};

SignupTwo.defaultProps = {
  signupFormValues: {},
  formSyncErrors: {},
  loading: false,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  signupFormValues: getFormValues('signupForm')(state),
  formSyncErrors: getFormSyncErrors('signupForm')(state),
});

const mapDispatchToProps = {
  signupRequest,
  selectState: value => change('signupForm', 'stepTwo.state', value),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupTwo);
