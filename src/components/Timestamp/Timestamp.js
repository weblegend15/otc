import React from 'react';
import moment from 'moment';

export default ({ timestamp, format, ...rest }) => (
  <div className="timestamp" {...rest}>
    {moment(timestamp).format(format)}
  </div>
);
