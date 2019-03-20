import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

export default (props) => {
  const { children } = props;
  return (
    <BootstrapButton {...props}>
      {children}
    </BootstrapButton>
  );
};
