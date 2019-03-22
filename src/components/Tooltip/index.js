import PropTypes from 'prop-types';

import Tooltip from './Tooltip';
import './Tooltip.scss';

Tooltip.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]),
  on: PropTypes.bool,
  icon: PropTypes.string,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  icon: 'remove',
  on: false,
  position: 'left',
};
export default Tooltip;