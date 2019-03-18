import React from 'react';
import FontAwesome from 'react-fontawesome';

export default (props) => {
  const { name, size, color } = props;

  return (
    <FontAwesome className={`icon-${color}`} name={ name } size={ size } />
  );
};
