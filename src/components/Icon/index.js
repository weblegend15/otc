import PropTypes from 'prop-types';

import Icon from './Icon';
import './Icon.scss';

Icon.propTypes = {
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: 'primary',
};

export default Icon;