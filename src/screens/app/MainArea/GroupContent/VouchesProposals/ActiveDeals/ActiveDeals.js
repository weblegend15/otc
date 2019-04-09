import React, { Component } from 'react';

import DealCard from './DealCard';

import { Col, Row, LoadingContainer } from '../../../../../../components';

const offerData = {
  _id: '5cab18197739ea000424c014',
  status: 'PENDING',
  proposals: [],
  vouches: [],
  expiresAt: '2019-05-07T22:03:38.927Z',
  offeredBy: { firstName: 'Emil', lastName: 'Admin' },
  have: 'BTC 1%',
  want: 'USD',
  note: 'nothing to note',
  group: '5ca3263d4ab3ac000416ba41',
  createdAt: '2019-04-08T09:44:57.169Z',
  updatedAt: '2019-04-08T09:44:57.169Z',
  __v: 0,
};

export default class ActiveDeals extends Component {
  componentDidMount() {
    const { getProposalsRequest, groupId } = this.props;
    getProposalsRequest({ limit: 20, skip: 0, groupId });
  }

  render() {
    const {
      proposals: { list, loading },
    } = this.props;
    return (
      <LoadingContainer loading={loading}>
        <div className="p-4 d-flex flex-wrap">
          <DealCard data={offerData} />
          <DealCard data={offerData} />
          <DealCard data={offerData} />
          <DealCard data={offerData} />
          {/* {list.map(item => (
            <Col key={item._id}>
              <DealCard data={item} />
            </Col>
          ))} */}
        </div>
      </LoadingContainer>
    );
  }
}
