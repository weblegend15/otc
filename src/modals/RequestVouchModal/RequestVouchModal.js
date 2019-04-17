import React, { Component } from 'react';
import cx from 'classnames';
import {
  Modal,
  ModalHeader,
  ModalBody,
  GeneralAvatar,
  Col,
  Row,
  Button,
  Input,
  LoadingContainer,
} from '../../components';

import { OFFER_STATUS_CLASS } from '../../config';

export default class RequestVouchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMember: '',
    };
  }

  componentDidMount() {
    const {
      modalData: { offerId, groupId },
      getVouchesRequest,
    } = this.props;
    getVouchesRequest({ offerId, groupId });
  }

  handleSendRequest = memberId => {
    const {
      createVouchRequest,
      modalData: { offerId, groupId },
    } = this.props;
    this.setState({ selectedMember: memberId });
    createVouchRequest({
      groupId,
      offerId,
      vouchData: { requestedTo: memberId },
    });
  };

  renderMembersList = () => {
    const {
      activeMembers: { list: membersList },
      vouches: { list: vouchesList, loading: vouchesLoading },
      vouch: { loading },
    } = this.props;
    const { selectedMember } = this.state;

    if (!membersList.length) {
      return (
        <div className="py-4 h4-title font-weight-semibold text-center">
          No member
        </div>
      );
    }

    return (
      <LoadingContainer loading={vouchesLoading}>
        <div className="members-list">
          {membersList.map((member, idx) => {
            const requestedMember = vouchesList.find(
              vouch => vouch.requestedTo._id === member._id,
            );
            const vouchStatus = requestedMember && requestedMember.status;
            const vouchStatusClass = vouchStatus
              ? OFFER_STATUS_CLASS[vouchStatus.toLowerCase()]
              : '';
            const rowClass = cx(
              'mx-0 py-3 px-4  border-default-color d-flex align-items-center',
              { 'border-bottom': idx !== membersList.length - 1 },
            );

            return (
              <Row key={member._id} className={rowClass}>
                <Col className="p-0">
                  <GeneralAvatar
                    data={{
                      firstName: member.firstName,
                      location: `${member.city}, ${member.country}`,
                    }}
                  />
                </Col>
                <Col
                  className={`text-right font-weight-bold p-0 text-${vouchStatusClass}`}
                >
                  {vouchStatus}
                  {!vouchStatus && (
                    <Button
                      className="btn-regular font-weight-bold px-4"
                      onClick={() => this.handleSendRequest(member._id)}
                      disabled={loading && selectedMember === member._id}
                    >
                      {loading && selectedMember === member._id
                        ? 'SENDING...'
                        : 'SEND'}
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </div>
      </LoadingContainer>
    );
  };

  render() {
    const { show, onHide } = this.props;

    return (
      <Modal className="request-vouch-modal" show={show} onHide={onHide}>
        <ModalHeader closeButton title="Request a vouch" />
        <ModalBody className="p-0">
          <p className="font-weight-bold px-4 pt-3">
            Select people in Crypto OTC group to request a vouch
          </p>
          <div className="px-4 mb-2">
            <Input icon="search" iconPosition="right" placeholder="Search" />
          </div>
          {this.renderMembersList()}
        </ModalBody>
      </Modal>
    );
  }
}
