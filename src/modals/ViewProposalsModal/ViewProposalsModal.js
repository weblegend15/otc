import React, { Component } from 'react';
import cx from 'classnames';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Button,
  LoadingContainer,
  GeneralAvatar,
} from '../../components';

import { PROPOSAL_STATUS_CLASS } from '../../config';

export default class ViewProposalsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProposal: {},
    };
  }

  componentDidMount() {
    const {
      getProposalsRequest,
      modalData: { offerId, groupId },
    } = this.props;
    getProposalsRequest({ skip: 0, limit: 1000, offerId, groupId });
  }

  handleSelectProposal = proposalId => {
    const { selectedProposal } = this.state;
    this.setState({
      selectedProposal: {
        [proposalId]: !selectedProposal[proposalId],
      },
    });
  };

  handleProposal = actionType => {
    const {
      acceptProposalRequest,
      rejectProposalRequest,
      modalData: { offerId, groupId },
      proposals: { list },
    } = this.props;
    const { selectedProposal } = this.state;

    const selectedProposalId = Object.keys(selectedProposal)[0];

    if (Object.values(selectedProposal)[0] && !!selectedProposalId) {
      const selectedProposalData = list.find(
        item => item._id === selectedProposalId,
      );
      switch (actionType) {
        case 'accept':
          acceptProposalRequest({
            groupId,
            offerId,
            proposalId: selectedProposalId,
            proposalData: {
              have: selectedProposalData.have,
              want: selectedProposalData.want,
            },
          });
          break;
        case 'reject':
          rejectProposalRequest({
            groupId,
            offerId,
            proposalId: selectedProposalId,
          });
          break;

        default:
          break;
      }
    }
  };

  renderProposalsList = () => {
    const {
      proposals: { list: proposalsList, loading: proposalsLoading },
    } = this.props;

    const { selectedProposal } = this.state;

    return (
      <LoadingContainer loading={proposalsLoading}>
        <div className="proposals-list">
          {proposalsList.map((proposal, idx) => {
            const statusClass =
              PROPOSAL_STATUS_CLASS[proposal.status.toLowerCase()];
            const rowClass = cx(
              'm-0 py-3 proposal-row d-flex align-items-center',
              {
                'border-bottom': idx !== proposalsList.length - 1,
                active: selectedProposal[proposal._id],
              },
            );

            return (
              <Row
                key={proposal._id}
                className={rowClass}
                onClick={() =>
                  this.handleSelectProposal(
                    proposal.status === 'PENDING' ? proposal._id : '',
                  )
                }
              >
                <Col>
                  <GeneralAvatar
                    data={{
                      firstName: proposal.proposedBy.firstName,
                      location: 'London, UK',
                    }}
                  />
                </Col>
                <Col className="p-0 d-flex flex-column">
                  <div className="d-flex flex-row">
                    <p className="opacity-5 m-0">HAVE:&nbsp;</p>
                    <p className="m-0">{proposal.have}</p>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="opacity-5 m-0">WANT:&nbsp;</p>
                    <p className="m-0">{proposal.want}</p>
                  </div>
                </Col>
                <Col
                  md={3}
                  className={`pl-0 text-uppercase text-right text-${statusClass}`}
                >
                  {proposal.status}
                </Col>
              </Row>
            );
          })}
        </div>
      </LoadingContainer>
    );
  };

  render() {
    const {
      acceptProposalLoading,
      rejectProposalLoading,
      proposals: { list: proposalsList },
      show,
      onHide,
    } = this.props;

    const acceptedProposal = proposalsList.find(
      proposal => proposal.status.toLowerCase() === 'active',
    );

    return (
      <Modal show={show} onHide={onHide} className="view-proposals-modal">
        <ModalHeader closeButton title="View proposals" />
        <ModalBody className="p-0">{this.renderProposalsList()}</ModalBody>
        <ModalFooter>
          {!acceptedProposal && (
            <Button
              disabled={acceptProposalLoading}
              className="btn-block"
              onClick={() => this.handleProposal('accept')}
            >
              {acceptProposalLoading ? 'Accepting...' : 'Accept'}
            </Button>
          )}
          <Button
            disabled={rejectProposalLoading}
            variant="dark"
            className="btn-block mt-0"
            onClick={() => this.handleProposal('reject')}
          >
            {rejectProposalLoading ? 'Rejecting...' : 'Reject'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
