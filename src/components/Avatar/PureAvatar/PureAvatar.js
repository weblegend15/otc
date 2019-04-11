import React from 'react';
import cx from 'classnames';
import Icon from '../../Icon';

export default ({ imgUrl, className, ...rest }) => {
  return (
    <div
      className={cx('general-avatar d-flex flex-row', {
        [className]: className,
      })}
      {...rest}
    >
      {!imgUrl ? (
        <Icon
          name="user"
          className="text-primary mr-3 d-flex px-3 justify-content-center align-items-center rounded-circle"
          size="2x"
        />
      ) : (
        <img src={imgUrl} alt="avatar" className="mr-1" />
      )}
    </div>
  );
};
