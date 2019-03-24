import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

export default ({ children, ...props }) => (
  <BootstrapButton {...props}>{children}</BootstrapButton>
);
