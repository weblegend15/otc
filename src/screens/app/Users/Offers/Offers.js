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
    const { getPermissionGroupsRequest } = this.props;
    this.getOffers();
    getPermissionGroupsRequest();
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { offerType: prevOfferType },
      },
    } = prevProps;

    if (!!prevOfferType && prevOfferType !== this.getOfferType()) {
      this.getOffers();
    }
  }

  getOfferType = () => {
    const {
      match: {
        params: { offerType },
      },
    } = this.props;
    return offerType;
  };

  getFilters() {
    return { status: this.getOfferType() === 'current' ? 'ACTIVE' : 'ENDED' };
  }

  getOffers(currentPage) {
    const { getMyOffersRequest } = this.props;

    getMyOffersRequest({
      skip: (currentPage || 0) * PAGE_LIMIT,
      limit: PAGE_LIMIT,
      filters: this.getFilters(),
    });
  }

  handlePageChange = value => {
    this.setState({ currentPage: value });
    this.getOffers(value);
  };

  renderOffersList = () => {
    const {
      myOffers: { list, total },
      currentUser,
    } = this.props;
    const { currentPage } = this.state;

    return (
      <Row className="m-0">
        {list.map(offer => (
          <Col lg={6} key={offer._id} className="mb-4 mb-lg-5">
            <OfferCard
              offerData={{ ...offer, offeredBy: currentUser }}
              cardType={this.getOfferType()}
            />
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
      myOffers: { loading },
    } = this.props;
    return (
      <LoadingContainer loading={loading}>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">
            {this.getOfferType() === 'current' ? 'Active' : 'Past'} Offers
          </h3>
        </Row>
        {this.renderOffersList()}
      </LoadingContainer>
    );
  }
}
