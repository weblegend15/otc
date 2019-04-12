import React from 'react';

import {
  Card,
  OfferDetail,
  Button,
  Badge,
} from '../../../../../../../components';

export default ({ data }) => {
  return (
    <div className="deal-card group-content-card-w-310 m-4">
      <Card className="p-0 mb-3">
        <Card.Header className="border-0">Deal in Group name</Card.Header>
        <Card.Body className="p-0">
          <OfferDetail
            data={data}
            proposals={[]}
            vouches={[]}
            type="activeDeal"
          />
        </Card.Body>
      </Card>
      <div className="d-flex flex-row justify-content-between">
        <Button className="text-uppercase font-weight-bold">
          Request Vouch
        </Button>
        <Button
          className="text-uppercase font-weight-bold d-flex flex-row align-items-center"
          variant="outline-primary"
        >
          Proposals{' '}
          <Badge className="ml-2" variant="primary">
            {data.proposals.length}
          </Badge>
        </Button>
      </div>
    </div>
  );
};
