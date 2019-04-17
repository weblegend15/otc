import PropTypes from 'prop-types';
import Toggle from './Toggle';
import './Toggle.scss';

Toggle.propTypes = {
  className: PropTypes.string,
  value: PropTypes.bool,
};

Toggle.defaultProps = {
  className: '',
  value: false,
};

export default Toggle;
