import React from 'react';

import Row from '../Row';
import Col from '../Col';
import Rating from '../Rating';
import Timestamp from '../Timestamp';

import VouchesProposals from './VouchesProposals';

export default ({ data, proposals, vouches, className, type }) => (
  <div className={`offer-detail ${className}`}>
    <Row className="mx-0 mb-2 px-4 d-flex flex-row justify-content-between align-items-center">
      <div className="p-sm opacity-5 d-flex flex-row">
        Posted on&nbsp;
        <Timestamp timestamp={data.createdAt} format="D MMM YYYY" />
      </div>
      <div className="offer-status border border-primary text-primary rounded px-2 font-weight-bold text-uppercase p-sm text-center">
        {data.status}
      </div>
    </Row>
    <Row className="mx-0 px-4 mb-3 d-flex flex-row justify-content-between p-sm align-items-center">
      <div className="d-flex flex-row align-item-center">
        by John Smith <Rating className="ml-2" initialRating={4} readonly />
      </div>
      <p className="m-0">Ends in 1h 15m</p>
    </Row>
    <Row className="m-0">
      <Col className="offer-detail-have p-0 border-right border-default-color d-flex flex-column align-items-center">
        <div className="p-2 text-uppercase w-100 text-center">Has</div>
        <p className="font-weight-bold h3-title p-4 text-primary">
          {data.have}
        </p>
      </Col>
      <Col className="offer-detail-want p-0 d-flex flex-column align-items-center">
        <div className="p-2 text-uppercase w-100 text-center">Wants</div>
        <p className="font-weight-bold h3-title p-4 text-primary">
          {data.want}
        </p>
      </Col>
    </Row>
    {type !== 'activeDeal' && (
      <Row className="mx-0 d-flex flex-column p-4 border-top border-default-color">
        <p className="m-0 text-uppercase opacity-5 p-sm">
          Comments from seller
        </p>
        <p className="m-0 p-sm">{data.note}</p>
      </Row>
    )}
    {type !== 'activeDeal' && (
      <VouchesProposals data={data} vouches={vouches} proposals={proposals} />
    )}
  </div>
);
