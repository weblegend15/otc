import React from 'react';
import Icon from '../../Icon';
import Button from '../Button';

export default (props) => {
  const { icon, iconSize, content, variant, size, iconPosition } = props;

  return (
    <Button variant={variant} size={size}>
      { icon && iconPosition === 'left' 
        ? (
          <React.Fragment>
            <Icon name={icon} size={iconSize} color={variant} /> &nbsp; {content}
          </React.Fragment>
        ) : (
          <React.Fragment>
            { content } &nbsp; <Icon name={icon} size={iconSize} color={variant} />
          </React.Fragment>
        )
      }
    </Button>
  );
};
