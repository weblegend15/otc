import PropTypes from 'prop-types';

import Tooltip from './Tooltip';
import './Tooltip.scss';

Tooltip.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  on: PropTypes.bool,
  icon: PropTypes.string,
};

Tooltip.defaultProps = {
  icon: 'remove',
};
export default Tooltip;