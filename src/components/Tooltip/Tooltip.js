import React from 'react';
import IconButton from '../Buttons/IconButton';

export default (props) =>{
  const { children, icon, position, showTooltip } = props;

  return (
    <div className={`tooltip-${position}`}>
      <IconButton
        onClick={() => showTooltip('off')}
        icon={icon}
        size='lg'
        variant='link'  
      />
      {children}
      <div className='triangle' />
    </div>
  );
};