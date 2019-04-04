import React from 'react';
import cx from 'classnames';

export default ({ icon, iconPosition, ...rest }) => {
  return (
    <div
      className={cx('inner-addon border-radius-10', {
        [`${iconPosition}-addon`]: iconPosition,
      })}
    >
      {icon && <i className={cx('fa input-icon', { [`fa-${icon}`]: icon })} />}
      <input className="form-control" {...rest} />
    </div>
  );
};
