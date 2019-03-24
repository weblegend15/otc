import React from 'react';
import { IconButton } from '../Button';

export default ({ children, icon, position, showTooltip, ...rest }) => {
  return (
    <div className={`tooltip-${position}`}>
      <IconButton
        onClick={() => showTooltip('off')}
        icon={icon}
        size="lg"
        variant="link"
        {...rest}
      />
      {children}
      <div className="triangle" />
    </div>
  );
};
