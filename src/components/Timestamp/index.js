import PropTypes from 'prop-types';

import Timestamp from './Timestamp';

Timestamp.propTypes = {
  format: PropTypes.string,
};

Timestamp.defaultProps = {
  timestamp: new Date(),
  format: 'D MMM YYYY h:mm a',
};

export default Timestamp;
