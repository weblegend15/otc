import PropTypes from 'prop-types';
import StateDropdown from './StateDropdown';

StateDropdown.propTypes = {
  value: PropTypes.string,
  error: PropTypes.bool,
  country: PropTypes.string,
  label: PropTypes.string,
  selectState: PropTypes.func,
};

StateDropdown.defaultProps = {
  value: '',
  error: false,
  country: '',
  label: '',
  selectState: () => {},
};

export default StateDropdown;
