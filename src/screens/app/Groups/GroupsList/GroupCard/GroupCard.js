import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from '../../../../../components';

export default ({ name, status, description, groupId }) => (
  <Card className="group-card">
    <Card.Body>
      <Card.Title className="d-flex flex-row justify-content-between align-items-center">
        <Link to={`/app/groups/${groupId}`}>
          <h4 className="font-weight-bold">{name}</h4>
        </Link>
        <div className="group-card-status text-dark d-flex flex-row">
          <Icon name="lock" className="mr-3" />
          <p className="m-0 p-md d-flex align-items-center">{status}</p>
        </div>
      </Card.Title>
      <Card.Text className="text-dark mb-4">{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="py-4 border-0 d-flex flex-row justify-content-between align-items-center">
      <Link
        to={`/app/groups/${groupId}`}
        className="btn btn-primary ml-auto font-weight-bold"
      >
        REQUEST ACCESS
      </Link>
    </Card.Footer>
  </Card>
);
