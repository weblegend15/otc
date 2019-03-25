import PropTypes from 'prop-types';
import PhoneInput from './PhoneInput';
import './PhoneInput.scss';

PhoneInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};

PhoneInput.defaultProps = {
  value: '',
  label: '',
};

export default PhoneInput;
