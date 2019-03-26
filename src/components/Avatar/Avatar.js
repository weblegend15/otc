import React from 'react';

import Icon from '../Icon';

export default ({
  data,
  className,
  avatarImage,
  editable,
  location,
  ...rest
}) => (
  <div className={`d-flex flex-row ${className}`} {...rest}>
    <div className="avatar-image mr-4 my-auto">
      {avatarImage ? (
        <img src={avatarImage} alt="avatar" />
      ) : (
        <Icon name="user" className="text-primary" size="4x" />
      )}
      {editable && (
        <Icon name="plus-circle" className="import-icon text-primary" />
      )}
    </div>
    <div className="d-flex flex-column justify-content-center">
      <h5>{data.firstName}</h5>
      <h3>{data.lastName}</h3>
      <h6 className="mb-0 text-light">{location}</h6>
    </div>
  </div>
);
