import PropTypes from 'prop-types';

import Card from './Card';
import './Card.scss';

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Card.defaultProps = {
  className: null,
  children: null,
};

export default Card;