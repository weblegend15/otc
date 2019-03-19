import React from 'react';

export default (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};