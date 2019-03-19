import React from 'react';
import FontAwesome from 'react-fontawesome';

export default (props) => {
  const { color } = props;

  return (
    <FontAwesome className={`icon-${color}`} {...props} />
  );
};
