import React, { Fragment } from 'react';

export default (props) => {
  const { children } = props;
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};