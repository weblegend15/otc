import PropTypes from 'prop-types';
import Input from './Input';
import './Input.scss';

Input.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
  iconPosition: null,
};

export default Input;
