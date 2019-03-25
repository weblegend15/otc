import React from 'react';
import { Card } from '../../../components';

export default ({ title, children, ...rest }) => (
  <div className="m-5">
    <h1 className="mb-4">{title}</h1>
    <Card {...rest}>{children}</Card>
  </div>
);
