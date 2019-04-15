import React, { Component, Fragment } from 'react';

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
      myOffers: { list, total, loading },
      currentUser,
    } = this.props;
    const { currentPage } = this.state;

    if (!list.length) {
      return (
        <div className="h3-title font-weight-semibold text-center">No data</div>
      );
    }

    return (
      <Row className="m-0">
        <LoadingContainer loading={loading}>
          {list.map(offer => (
            <Col lg={6} key={offer._id} className="mb-4 mb-lg-5">
              <OfferCard
                offerData={{ ...offer, offeredBy: currentUser }}
                cardType={this.getOfferType()}
              />
            </Col>
          ))}
        </LoadingContainer>

        {!!total && (
          <Col md={12} className="d-flex mb-2">
            <Pagination
              className="ml-auto"
              total={total}
              perPage={PAGE_LIMIT}
              currentPage={currentPage}
              onChange={this.handlePageChange}
            />
          </Col>
        )}
      </Row>
    );
  };

  render() {
    return (
      <Fragment>
        <Row className="groups-list-title mx-2 d-none d-md-block">
          <h3 className="mr-auto">
            {this.getOfferType() === 'current' ? 'Active' : 'Past'} Offers
          </h3>
        </Row>
        {this.renderOffersList()}
      </Fragment>
    );
  }
}
