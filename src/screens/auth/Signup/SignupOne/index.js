import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFormSyncErrors } from 'redux-form';

import SignupOne from './SignupOne';

SignupOne.propTypes = {
  formSyncErrors: PropTypes.object,
};

SignupOne.defaultProps = {
  formSyncErrors: {},
};

const mapStateToProps = state => ({
  signupStepOne: state.form.signupStepOne,
  formSyncErrors: getFormSyncErrors('signupForm')(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupOne);
