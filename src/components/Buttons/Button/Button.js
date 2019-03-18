import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';

export default (props) => {
  const { variant, children } = props;
  return (
    <BootstrapButton className={`button-${variant}`} {...props}>
      {children}
    </BootstrapButton>
  );
};
