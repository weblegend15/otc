import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, getFormValues } from 'redux-form';
import PhoneInput from './PhoneInput';
import './PhoneInput.scss';

PhoneInput.propTypes = {
  stepTwoValues: PropTypes.object,
  setPhone: PropTypes.func,
};

PhoneInput.defaultProps = {
  stepTwoValues: {},
  setPhone: () => {},
};

const mapStateToProps = state => ({
  stepTwoValues: getFormValues('signupForm')(state).stepTwo,
});

const mapDispatchToProps = {
  setPhone: value => change('signupForm', 'stepTwo.phone', value),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneInput);
