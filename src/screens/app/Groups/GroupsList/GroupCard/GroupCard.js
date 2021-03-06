import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
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
  const { isGroupAdmin, isBanned, isApplied, isMember } = checkGroupPermission(
    currentUser,
    groupId,
  );

  return (
    <Card className="group-card">
      <Card.Body className="p-4">
        <Card.Title className="d-flex flex-row justify-content-between align-items-center">
          <Link
            className="font-weight-bold h4-title font-black"
            to={`/app/groups/${groupId}${
              currentUser.role === 'ADMIN' || isGroupAdmin ? '/admin' : ''
            }`}
          >
            <Truncate lines={1}>{name}</Truncate>
          </Link>

          <div className="group-card-status text-dark d-flex flex-row font-weight-semibold">
            <Icon name="lock" className="mr-3" />
            <p className="m-0 p-md d-flex align-items-center p-sm">{status}</p>
          </div>
        </Card.Title>
        <Card.Text className="text-dark mb-2">
          <Truncate lines={2}>{description}</Truncate>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="py-3 px-4 border-0 d-flex flex-row justify-content-between align-items-center">
        {(currentUser.role === 'ADMIN' || isGroupAdmin) && (
          <Button
            className="mr-4"
            variant="outline-link"
            onClick={() => toggleModal('deleteGroupModal', groupId)}
          >
            <Icon name="trash" className="h3-title opacity-5" />
          </Button>
        )}

        {currentUser.role === 'ADMIN' && status !== 'ACTIVE' && (
          <Button
            variant="outline-link"
            onClick={() => toggleModal('approveGroupModal', groupId)}
          >
            <Icon name="thumbs-up" className="h3-title opacity-5" />
          </Button>
        )}

        <div className="ml-auto">
          {isApplied && 'Applied'}
          {isBanned && 'Banned'}
          {isMember && 'Member'}
          {isGroupAdmin && 'Group Admin'}
        </div>

        {!isGroupAdmin && !isBanned && !isMember && !isApplied && (
          <Link
            to={`/app/groups/${groupId}`}
            className="btn btn-primary ml-auto font-weight-bold"
          >
            REQUEST ACCESS
          </Link>
        )}
      </Card.Footer>
    </Card>
  );
};
