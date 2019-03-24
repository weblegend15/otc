import PropTypes from 'prop-types';

import Button from './Button';
import './Button.scss';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
