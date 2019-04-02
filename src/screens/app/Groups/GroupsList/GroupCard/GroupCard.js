import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Button } from '../../../../../components';

import { checkGroupPermission } from '../../../../../utils/permission';

export default ({
  name,
  status,
  description,
  groupId,
  currentUser,
  toggleModal,
}) => {
  const { isGroupAdmin } = checkGroupPermission(currentUser, groupId);

  return (
    <Card className="group-card">
      <Card.Body>
        <Card.Title className="d-flex flex-row justify-content-between align-items-center">
          <Link to={`/app/groups/${groupId}`}>
            <h4 className="font-weight-bold">{name}</h4>
          </Link>
          <div className="group-card-status text-dark d-flex flex-row font-weight-semibold">
            <Icon name="lock" className="mr-3" />
            <p className="m-0 p-md d-flex align-items-center p-sm">{status}</p>
          </div>
        </Card.Title>
        <Card.Text className="text-dark mb-4">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="py-4 border-0 d-flex flex-row justify-content-between align-items-center">
        {(currentUser.role === 'ADMIN' || isGroupAdmin) && (
          <Button
            variant="outline-link"
            onClick={() => toggleModal('deleteGroupModal', groupId)}
          >
            <Icon name="trash" className="h3-title opacity-5" />
          </Button>
        )}

        {currentUser.role === 'ADMIN' && (
          <Button
            variant="outline-link"
            onClick={() => toggleModal('approveGroupModal', groupId)}
          >
            <Icon name="thumbs-up" className="h3-title opacity-5" />
          </Button>
        )}

        <Link
          to={`/app/groups/${groupId}`}
          className="btn btn-primary ml-auto font-weight-bold"
        >
          REQUEST ACCESS
        </Link>
      </Card.Footer>
    </Card>
  );
};
