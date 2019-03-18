import React from 'react';
import moment from 'moment';

export default () => (
  <div className="timestamp">
    {moment().format('D MMM YYYY h:mm a')}
  </div>
);