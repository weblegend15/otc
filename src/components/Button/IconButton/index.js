import PropTypes from 'prop-types';

import IconButton from './IconButton';

PropTypes.propTypes = {
  content: PropTypes.string,
  iconSize: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClick: PropTypes.function,
};

export default IconButton;
