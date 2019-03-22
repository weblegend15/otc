import PropTypes from 'prop-types';

import Tabs from './Tabs';
import './Tabs.scss';

Tabs.propTypes = {
  headers: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Tabs;