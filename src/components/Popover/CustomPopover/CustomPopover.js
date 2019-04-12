import React from 'react';
import Popover from 'react-bootstrap/Popover';

export default props => {
  const { title, children } = props;
  return (
    <Popover id="custom-popover-trigger-focus" title={title} {...props}>
      {children}
    </Popover>
  );
};
