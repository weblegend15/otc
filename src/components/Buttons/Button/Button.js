import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

export default (props) => {
  const { variant, size, children } = props;
  return (
    <BootstrapButton className={`button-${variant}`} variant={variant} size={size} >
      {children}
    </BootstrapButton>
  );
};
