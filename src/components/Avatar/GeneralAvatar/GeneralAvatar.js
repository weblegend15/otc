import React from 'react';
import cx from 'classnames';
import Icon from '../../Icon';

export default ({ data, className, ...rest }) => {
  return (
    <div
      className={cx('general-avatar d-flex flex-row', {
        [className]: className,
      })}
      {...rest}
    >
      {!data.imgUrl ? (
        <Icon
          name="user"
          className="text-primary mr-2 d-flex justify-content-center align-items-center rounded-circle"
          size="2x"
        />
      ) : (
        <img src={data.imgUrl} alt="avatar" className="mr-1" />
      )}

      <div className="d-flex flex-column align-items-start">
        <div className="d-flex flex-row font-weight-semibold h4-title">
          <p>{data.firstName}</p>&nbsp;
          <p>{data.lastName}</p>
        </div>
        <p className="opacity-5">{data.location}</p>
      </div>
    </div>
  );
};
