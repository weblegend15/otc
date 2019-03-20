import PropTypes from 'prop-types';

import Badge from './Badge';
import './Badge.scss';

Badge.propTypes = {
  number: PropTypes.number,
  variant: PropTypes.string,
};

export default Badge;