import React from 'react';

export default (props) => {
  const { placeholder, icon, iconPosition } = props;

  return (
    <React.Fragment>
      <div className={ iconPosition && `inner-addon ${iconPosition}-addon`}>
        { icon && <i className={`fa input-icon fa-${icon}`}></i>}
        <input type="text" className="form-control" placeholder={placeholder} />
      </div>
    </React.Fragment>
  );
};