import PropTypes from 'prop-types';
import PhoneInput from './PhoneInput';
import './PhoneInput.scss';

PhoneInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  setPhone: PropTypes.func,
};

PhoneInput.defaultProps = {
  value: '',
  label: '',
  setPhone: () => {},
};

export default PhoneInput;
