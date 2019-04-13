import React from 'react';

import {
  Row,
  Col,
  Timestamp,
  GeneralAvatar,
  LabelRating,
  Button,
  SocialIcons,
} from '../../../../../../components';

export default ({ userData, index, usersCount, onViewClick }) => {
  return (
    <Row
      key={userData._id}
      className={`${
        index === usersCount - 1 ? 'border-0' : 'border-bottom'
      } border-default-color d-flex align-items-center justify-content-center py-4`}
    >
      <Col className="text-center p-sm" md={2}>
        <Timestamp timestamp={userData.createdAt} />
      </Col>
      <Col className="text-center" md={3}>
        <GeneralAvatar
          data={{
            ...userData,
            location: `${userData.city}, ${userData.country}`,
          }}
        />
      </Col>
      <Col className="text-center" md={2}>
        <LabelRating
          avgRating={userData.avgRating}
          ratingCount={userData.ratingCount}
        />
      </Col>
      <Col className="text-center" md={3}>
        <SocialIcons />
      </Col>
      <Col className="text-center" md={2}>
        <Button
          className="text-uppercase font-weight-bold p-lg"
          variant="outline-primary"
          onClick={() => onViewClick(userData)}
        >
          View
        </Button>
      </Col>
    </Row>
  );
};
