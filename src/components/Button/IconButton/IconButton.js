import React from 'react';
import Icon from '../../Icon';
import Button from '../Button';

export default ({
  icon,
  iconSize,
  variant,
  iconPosition,
  children,
  ...rest
}) => (
  <Button {...rest}>
    {icon && <Icon name={icon} size={iconSize} color={variant} />}
    {children}
  </Button>
);
