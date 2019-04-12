import React, { Component } from 'react';
import cx from 'classnames';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
      selectedMember: {},
    };
  }

  componentDidMount() {
    const {
      modalData: { offerId, groupId },
      getVouchesRequest,
    } = this.props;
    getVouchesRequest({ offerId, groupId });
  }

  handleRequestSend = () => {
    const {
      createVouchRequest,
      modalData: { offerId, groupId },
    } = this.props;
    const { selectedMember } = this.state;
    const selectedMemberId = Object.keys(selectedMember)[0];

    if (Object.values(selectedMember)[0] && selectedMemberId) {
      createVouchRequest({
        groupId,
        offerId,
        vouchData: { requestedTo: selectedMemberId },
      });
    }
  };

  handleMemberSelect = memberId => {
    const { selectedMember } = this.state;
    this.setState({
      selectedMember: {
        [memberId]: !selectedMember[memberId],
      },
    });
  };

  renderMembersList = () => {
    const {
      activeMembers,
      vouches: { list: vouchesList, loading: vouchesLoading },
    } = this.props;
    const { selectedMember } = this.state;

    return (
      <LoadingContainer loading={vouchesLoading}>
        <div className="members-list">
          {activeMembers.map((member, idx) => {
            const requestedMember = vouchesList.find(
              vouch => vouch.requestedTo === member._id,
            );
            const vouchStatus = requestedMember && requestedMember.status;
            const vouchStatusClass = vouchStatus
              ? OFFER_STATUS_CLASS[vouchStatus.toLowerCase()]
              : '';
            const rowClass = cx(
              'mx-0 py-3 px-4 border-default-color d-flex align-items-center',
              {
                active: selectedMember[member._id],
                'border-bottom': idx !== activeMembers.length - 1,
                vouched: vouchStatus,
              },
            );

            return (
              <Row
                key={member._id}
                className={rowClass}
                onClick={() =>
                  this.handleMemberSelect(!vouchStatus ? member._id : null)
                }
              >
                <Col>
                  <GeneralAvatar
                    data={{
                      firstName: member.firstName,
                      location: 'London, UK',
                    }}
                  />
                </Col>
                <Col className={`text-right text-${vouchStatusClass}`}>
                  {vouchStatus}
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
      show,
      onHide,
      vouch: { loading },
    } = this.props;

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
        <ModalFooter>
          <Button
            disabled={loading}
            className="btn-block"
            onClick={this.handleRequestSend}
          >
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
