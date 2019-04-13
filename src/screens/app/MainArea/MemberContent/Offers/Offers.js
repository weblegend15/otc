import React, { Component } from 'react';

import {
  LoadingContainer,
  Row,
  Col,
  Pagination,
} from '../../../../../components';

import OfferCard from '../../../Users/Offers/OfferCard';

import { PAGE_LIMIT } from '../../../../../config';

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.getOffers();
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
    const { selectedGroupMemberId } = this.props;

    return {
      offeredBy: selectedGroupMemberId,
      status: this.getOfferType() === 'current' ? 'ACTIVE' : 'ENDED',
    };
  }

  getOffers(currentPage) {
    const { selectedGroupId, getOffersRequest } = this.props;
    getOffersRequest({
      limit: PAGE_LIMIT,
      skip: (currentPage || 0) * PAGE_LIMIT,
      groupId: selectedGroupId,
      filters: this.getFilters(),
    });
  }

  handlePageChange = value => {
    this.setState({ currentPage: value });
    this.getOffers(value);
  };

  render() {
    const {
      memberOffers: { list, total, loading },
      selectedMember: { data },
    } = this.props;
    const { currentPage } = this.state;

    const cardType =
      this.getOfferType() === 'current'
        ? 'memberActiveOffer'
        : 'memberPastOffer';

    if (!list.length) {
      return (
        <div className="h3-title font-weight-semibold text-center p-5">
          No data
        </div>
      );
    }

    return (
      <Row className="m-5">
        <LoadingContainer loading={loading} className="mx-auto">
          {list.map(offer => (
            <Col lg={6} key={offer._id} className="pl-0 pr-4 ml-0 mb-4 mb-lg-5">
              <OfferCard
                offerData={{ ...offer, offeredBy: data }}
                cardType={cardType}
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
  }
}
