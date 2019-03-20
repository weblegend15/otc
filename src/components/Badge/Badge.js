import React, { Fragment } from 'react';
import Badge from 'react-bootstrap/Badge';

export default (props) => {
  const { number } = props;
  return (
    <Fragment>
      {number > 99 
        ? <Badge className="badge-number" pill {...props}>99</Badge>
        : <Badge className="badge-number" pill {...props}>{number}</Badge>
      }
    </Fragment>
  );
};