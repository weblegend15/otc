import React from 'react';

import {
  Timestamp,
  Col,
  Row,
  GeneralAvatar,
  Button,
  LabelRating,
  SocialIcons,
} from '../../../../../../components';

import { checkGroupPermission } from '../../../../../../utils/permission';

export default ({ userData, index, usersCount, groupId, onClick }) => {
  return (
    <Row
      key={userData._id}
      className={`${
        index === usersCount - 1 ? 'border-0' : 'border-bottom'
      } border-default-color d-flex align-items-center justify-content-center py-4`}
    >
      <Col className="text-center p-sm p-0" md={1}>
        <Timestamp />
      </Col>
      <Col className="text-center p-0" md={2}>
        <GeneralAvatar data={{ ...userData, location: 'London, UK' }} />
      </Col>
      <Col className="text-center p-0" md={2}>
        <LabelRating
          avgRating={userData.avgRating}
          ratingCount={userData.ratingCount}
        />
      </Col>
      <Col className="text-center p-0" md={2}>
        <SocialIcons />
      </Col>
      <Col className="text-center p-0" md={1}>
        {checkGroupPermission(userData, groupId).isMember ? 'Active' : 'Banned'}
      </Col>
      <Col className="text-center d-flex justify-content-center p-0" md={4}>
        <Button
          className="text-uppercase font-weight-bold p-lg"
          variant="dark"
          onClick={() =>
            onClick(
              checkGroupPermission(userData, groupId).isBanned
                ? 'unban'
                : 'ban',
              userData._id,
            )
          }
        >
          {checkGroupPermission(userData, groupId).isBanned
            ? 'unban user'
            : 'Ban user'}
        </Button>
        <Button className="text-uppercase font-weight-bold p-lg mx-3">
          Message
        </Button>
        <Button
          className="text-uppercase font-weight-bold p-lg"
          variant="outline-primary"
          onClick={() => onClick('admin', userData._id)}
        >
          Make admin
        </Button>
      </Col>
    </Row>
  );
};
