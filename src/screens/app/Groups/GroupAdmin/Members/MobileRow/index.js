import React from 'react';

import {
  Row,
  Col,
  Timestamp,
  Button,
  GeneralAvatar,
  LabelRating,
  Card,
  SocialIcons,
} from '../../../../../../components';

import { checkGroupPermission } from '../../../../../../utils/permission';

export default ({ userData, groupId, onClick }) => {
  return (
    <div className="mb-4">
      <Card className="p-3 mb-3 border-0">
        <Row className="m-0 d-flex justify-content-between mb-4">
          <GeneralAvatar data={{ ...userData, location: 'London, UK' }} />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-uppercase opacity-5 font-weight-semibold p-sm">
              Joined
            </p>
            <Timestamp className="p-sm" />
          </div>
        </Row>
        <div className="text-center mb-4">
          <SocialIcons />
        </div>
        <Row className="mb-3">
          <Col xs={7} className="text-center">
            <LabelRating
              avgRating={userData.avgRating}
              ratingCount={userData.ratingCount}
            />
          </Col>
          <Col xs={5} className="border-left text-center">
            <div className="p-sm opacity-5 text-uppercase">Status</div>
            <div className="p-sm font-weight-bold text-uppercase">
              {checkGroupPermission(userData, groupId).isMember
                ? 'Active'
                : 'Banned'}
            </div>
          </Col>
        </Row>
      </Card>
      <div className="d-flex justify-content-between">
        <Button
          className="text-uppercase font-weight-bold p-lg"
          variant="dark"
          onClick={() => onClick('ban', userData._id)}
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
      </div>
    </div>
  );
};
