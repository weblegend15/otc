import React, { Fragment } from 'react';
import Icon from '../../Icon';
import Button from '../Button';

export default (props) => {
  const { icon, iconSize, content, variant, iconPosition } = props;

  return (
    <Button {...props}>
      {content ? (
        <Fragment>
          {icon && iconPosition === 'left' && (
            <Fragment>
              <Icon name={icon} size={iconSize} color={variant} />
              &nbsp;
            </Fragment>
          )}
          {content}
          {icon && iconPosition === 'right' && (
            <Fragment>
              &nbsp;
              <Icon name={icon} size={iconSize} color={variant} />
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Icon name={icon} size={iconSize} color={variant} />
      )}
    </Button>
  );
};
