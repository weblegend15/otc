import React, { Component } from 'react';
import cx from 'classnames';
import {
  LoadingContainer,
  Row,
  Col,
  Button,
  GeneralAvatar,
  Timestamp,
} from '../../../../../../components';

import { OFFER_STATUS_CLASS } from '../../../../../../config';

export default class ActiveProposals extends Component {
  componentDidMount() {
    const { getMyProposalsRequest, selectedGroupId } = this.props;
    getMyProposalsRequest({
      skip: 0,
      limit: 1000,
      groupId: selectedGroupId,
    });
  }

  handleVouchRequest = data => {
    const { selectedGroupId, toggleModal } = this.props;
    toggleModal('requestVouchModal', {
      offerId: data.offer._id,
      groupId: selectedGroupId,
    });
  };

  renderTableHeader = () => {
    return (
      <Row className="m-0 pt-3 pb-2 px-4 font-weight-semibold p-sm border-bottom border-default-color">
        <Col className="opacity-5">POSTED</Col>
        <Col md={3} className="opacity-5">
          USER
        </Col>
        <Col className="opacity-5">OFFER</Col>
        <Col className="opacity-5">MY PROPOSAL</Col>
        <Col className="opacity-5">STATUS</Col>
        <Col md={1} className="opacity-5">
          VOUCHES
        </Col>
      </Row>
    );
  };

  renderTableBody = proposals => {
    const {
      activeMembers: { list },
    } = this.props;

    if (!proposals.length) {
      return (
        <div className="font-weight-semibold text-center p-5 h3-title">
          No data
        </div>
      );
    }

    return proposals
      .filter(proposal => proposal.status !== 'ENDED' && proposal.offer)
      .map((proposal, idx) => {
        const offeredMember = list.find(
          member => member._id === proposal.offer.offeredBy,
        );

        const rowClass = cx('p-4 m-0 d-flex align-items-center', {
          'border-bottom': idx !== proposals.length,
        });
        const statusClass = OFFER_STATUS_CLASS[proposal.status.toLowerCase()];

        return (
          <Row key={proposal._id} className={rowClass}>
            <Col className="p-sm">
              <Timestamp timestamp={proposal.createdAt} />
            </Col>
            <Col md={3}>
              {offeredMember ? (
                <GeneralAvatar
                  data={{
                    firstName: offeredMember.firstName,
                    lastName: offeredMember.lastName,
                    location: `${offeredMember.city}, ${offeredMember.country}`,
                  }}
                />
              ) : (
                '-'
              )}
            </Col>
            <Col className="font-weight-semibold d-flex flex-column">
              <div className="d-flex flex-row">
                <p className="opacity-5">HAS:&nbsp;</p>
                <p>{proposal.offer.have}</p>
              </div>
              <div className="d-flex flex-row">
                <p className="opacity-5">WANTS:&nbsp;</p>
                <p>{proposal.offer.want}</p>
              </div>
            </Col>
            <Col className="font-weight-semibold d-flex flex-column">
              <div className="d-flex flex-row">
                <p>I HAVE:&nbsp;</p>
                <p className="text-primary">{proposal.have}</p>
              </div>
              <div className="d-flex flex-row">
                <p>I WANT:&nbsp;</p>
                <p className="text-primary">{proposal.want}</p>
              </div>
            </Col>
            <Col className={`font-weight-semibold text-${statusClass}`}>
              {proposal.status}
            </Col>
            <Col md={1}>
              <Button
                className="font-weight-bold btn-regular"
                onClick={() => this.handleVouchRequest(proposal)}
              >
                REQUEST
              </Button>
            </Col>
          </Row>
        );
      });
  };

  render() {
    const {
      groupProposals: { list, loading },
    } = this.props;

    return (
      <div className="my-active-proposals">
        {this.renderTableHeader()}
        <LoadingContainer loading={loading}>
          {this.renderTableBody(list)}
        </LoadingContainer>
      </div>
    );
  }
}
