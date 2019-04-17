import React from 'react';
import cx from 'classnames';
import Button from '../Button';

export default ({ className, value, ...rest }) => (
  <Button
    className={cx('m-0 p-0 toggle border-0', className, {
      on: value,
      off: !value,
    })}
    {...rest}
  >
    <p />
  </Button>
);
