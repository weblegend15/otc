import React from 'react';

import {
  Card,
  Row,
  Timestamp,
  GeneralAvatar,
  LabelRating,
  Button,
  SocialIcons,
} from '../../../../../../components';

export default ({ userData, onViewClick }) => {
  return (
    <Card className="mb-3 border-0">
      <Card.Body className="p-3">
        <Row className="mx-0 mb-4">
          <GeneralAvatar
            data={{
              ...userData,
              location: `${userData.city}, ${userData.country}`,
            }}
          />
          <div className="ml-auto d-flex flex-column justify-content-center align-items-center p-sm">
            <p className="text-uppercase font-weight-semibold opacity-5">
              Sent
            </p>
            <Timestamp timestamp={userData.createdAt} />
          </div>
        </Row>
        <div className="text-center mb-4">
          <SocialIcons />
        </div>
        <div className="text-center">
          <LabelRating
            avgRating={userData.avgRating}
            ratingCount={userData.ratingCount}
          />
        </div>
      </Card.Body>
      <Card.Footer className="text-center border-0">
        <Button
          className="text-uppercase font-weight-bold p-lg px-4"
          variant="outline-primary"
          onClick={() => onViewClick(userData)}
        >
          View
        </Button>
      </Card.Footer>
    </Card>
  );
};
