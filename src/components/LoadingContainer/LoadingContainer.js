import React from 'react';
import cx from 'classnames';

import Icon from '../Icon';

export default ({ loading, children, className, ...rest }) => {
  return loading ? (
    <div
      className={cx('w-auto my-auto text-center p-4 mx-auto', className)}
      {...rest}
    >
      <Icon name="spinner" spin size="3x" />
    </div>
  ) : (
    children
  );
};
