import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForgotPassword from './ForgotPassword';
import './ForgotPassword.scss';
import {
  confirmPasswordRequest,
  forgotPasswordRequest,
  resetForgotPasswordStep,
} from '../redux/actions';

ForgotPassword.propTypes = {
  forgotPasswordRequest: PropTypes.func,
  resetForgotPasswordStep: PropTypes.func,
  confirmPasswordRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  step: state.auth.forgotPassword.step,
  resetRequestState: state.auth.forgotPassword.state,
  email: state.auth.forgotPassword.email,
});
const mapDispatchToProps = {
  forgotPasswordRequest,
  resetForgotPasswordStep,
  confirmPasswordRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
