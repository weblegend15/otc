import React from 'react';
import cx from 'classnames';

export default ({ icon, iconPosition, ...rest }) => {
  return (
    <div
      className={cx('inner-addon', {
        [`${iconPosition}-addon`]: iconPosition,
      })}
    >
      {icon && <i className={cx('fa input-icon', { [`fa-${icon}`]: icon })} />}
      <input className="form-control" {...rest} />
    </div>
  );
};
