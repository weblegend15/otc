import React, { Component } from 'react';

import { LoadingContainer, Col, Row, Pagination } from '../../../../components';

import OfferCard from './OfferCard';
import { PAGE_LIMIT } from '../../../../config';

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    const {
      getMyOffersRequest,
      getPermissionGroupsRequest,
      match: {
        params: { offerType },
      },
    } = this.props;
    const filters = { status: offerType === 'current' ? 'ACTIVE' : 'ENDED' };
    getMyOffersRequest({ limit: PAGE_LIMIT, skip: 0, filters });
    getPermissionGroupsRequest();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { offerType },
      },
      getMyOffersRequest,
    } = this.props;
    const {
      match: {
        params: { offerType: prevOfferType },
      },
    } = prevProps;
    if (!!prevOfferType && prevOfferType !== offerType) {
      const filters = { status: offerType === 'current' ? 'ACTIVE' : 'ENDED' };
      getMyOffersRequest({ limit: PAGE_LIMIT, skip: 0, filters });
    }
  }

  handlePageChange = value => {
    const { getMyOffersRequest } = this.props;

    this.setState({ currentPage: value });
    getMyOffersRequest({ skip: value * PAGE_LIMIT, limit: PAGE_LIMIT });
  };

  renderOffersList = () => {
    const {
      myOffers: { list, total },
      match: {
        params: { offerType },
      },
    } = this.props;
    const { currentPage } = this.state;

    return (
      <Row className="m-0">
        {list.map(offer => (
          <Col lg={6} key={offer._id} className="mb-4 mb-lg-5">
            <OfferCard offerData={offer} cardType={offerType} />
          </Col>
        ))}
        <Col md={12} className="d-flex mb-2">
          <Pagination
            className="ml-auto"
            total={total}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Col>
      </Row>
    );
  };

  render() {
    const {
      match: {
        params: { offerType },
      },
      myOffers: { loading },
    } = this.props;
    return (
      <LoadingContainer loading={loading}>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">
            {offerType === 'current' ? 'Active' : 'Past'} Offers
          </h3>
        </Row>
        {this.renderOffersList()}
      </LoadingContainer>
    );
  }
}
