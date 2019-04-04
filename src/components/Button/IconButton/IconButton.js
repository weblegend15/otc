import React from 'react';
import cx from 'classnames';
import Icon from '../../Icon';
import Button from '../Button';

export default ({
  icon,
  iconSize,
  variant,
  iconPosition,
  className,
  buttonClassName,
  onClick,
  children,
  ...rest
}) => (
  <Button
    className={cx({ [buttonClassName]: buttonClassName })}
    onClick={onClick}
    {...rest}
  >
    {icon && (
      <Icon
        name={icon}
        size={iconSize}
        color={variant}
        className={cx({ [className]: className })}
      />
    )}
    {children}
  </Button>
);
