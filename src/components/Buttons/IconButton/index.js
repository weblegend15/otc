import PropTypes from 'prop-types';

import IconButton from './IconButton';
import './IconButton.scss';

PropTypes.propTypes = {
  content: PropTypes.string,
  iconSize: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
};

export default IconButton;