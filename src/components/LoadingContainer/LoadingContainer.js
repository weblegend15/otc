import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

export default ({ loading, children, ...rest }) => (
  <LoadingOverlay active={loading} spinner text="Loading..." {...rest}>
    {children}
  </LoadingOverlay>
);
