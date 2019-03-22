import PropTypes from 'prop-types';
import CountryDropdown from './CountryDropdown';

import './CountryDropdown.scss';

CountryDropdown.propTypes = {
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  selectCountry: PropTypes.func,
};

CountryDropdown.defaultProps = {
  value: '',
  touched: false,
  error: false,
  label: '',
  selectCountry: () => {},
};

export default CountryDropdown;
