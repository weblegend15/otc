import React from 'react';
import cx from 'classnames';
import Card from 'react-bootstrap/Card';

export default (props) => {
  const { children, className } = props;
  const customClass = cx({ [className]: !!className });

  return (
    <Card {...props} className={customClass} >
      {children}
    </Card>
  );
};