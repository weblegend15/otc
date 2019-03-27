import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from '../../../../components';

import { formatNumber } from '../../../../utils/common';

export default ({ name, status, description, memberCount, groupId }) => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title className="d-flex flex-row justify-content-between align-items-center">
          <h4>{name}</h4>
          <div className="text-dark d-flex flex-row">
            <Icon name="lock" className="mr-3" />
            <p className="m-0 p-md d-flex align-items-center">{status}</p>
          </div>
        </Card.Title>
        <Card.Text className="text-dark mb-4">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-0 d-flex flex-row justify-content-between align-items-center">
        <div className="text-dark">{formatNumber(memberCount)} members</div>
        <Link
          to={`/app/my-groups/${groupId}`}
          className="btn btn-outline-primary"
        >
          REQUEST ACCESS
        </Link>
      </Card.Footer>
    </Card>
  );
};
