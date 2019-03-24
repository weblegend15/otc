import PropTypes from 'prop-types';
import InputBox from './Input';
import './Input.scss';

InputBox.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
};

InputBox.defaultProps = {
  icon: null,
  iconPosition: null,
};

export default InputBox;
