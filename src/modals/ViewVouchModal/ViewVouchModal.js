import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  GeneralAvatar,
  Rating,
} from '../../components';
import Timestamp from '../../components/Timestamp/Timestamp';

import { OFFER_STATUS_CLASS } from '../../config';

export default class NewGroupModal extends Component {
  handleVouch = actionType => {
    const {
      acceptVouchRequest,
      rejectVouchRequest,
      data: { vouchData },
    } = this.props;
    const vouchId = vouchData._id;
    const offerId = vouchData.offer._id;
    const groupId = vouchData.offer.group;

    switch (actionType) {
      case 'accept':
        acceptVouchRequest({ vouchId, offerId, groupId });
        break;
      case 'reject':
        rejectVouchRequest({ vouchId, offerId, groupId });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      show,
      onHide,
      acceptVouchLoading,
      rejectVouchLoading,
      data,
    } = this.props;

    if (!data) {
      return null;
    }
    const { vouchData } = data;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader closeButton title="People requesting your vouch" />
        <ModalBody className="p-0">
          <div className="px-4 pt-4 d-flex flex-row align-items-center">
            <p className="font-weight-semibold opacity-5 mb-0">
              Requested on&nbsp;&nbsp;
            </p>
            <Timestamp timestamp={vouchData.createAt} />
            <p
              className={`ml-auto mb-0 font-weight-semibold text-${
                OFFER_STATUS_CLASS[vouchData.status.toLowerCase()]
              }`}
            >
              {vouchData.status}
            </p>
          </div>
          <div className="p-4 d-flex flex-row justify-content-between align-items-center">
            <GeneralAvatar
              data={{
                firstName: vouchData.requestedBy.firstName,
                lastName: vouchData.requestedBy.lastName,
                location: `${vouchData.requestedBy.city}, ${
                  vouchData.requestedBy.country
                }`,
              }}
            />
            <Rating initialRating={vouchData.requestedBy.avgRating} readonly />
          </div>
        </ModalBody>
        {vouchData.status === 'PENDING' && (
          <ModalFooter>
            <Button
              className="w-50"
              onClick={() => this.handleVouch('accept')}
              disabled={acceptVouchLoading}
            >
              {acceptVouchLoading ? 'Accepting...' : 'Accept'}
            </Button>
            <Button
              className="w-50  ml-3"
              variant="dark"
              onClick={() => this.handleVouch('reject')}
              disabled={rejectVouchLoading}
            >
              {rejectVouchLoading ? 'Rejecting...' : 'Reject'}
            </Button>
          </ModalFooter>
        )}
      </Modal>
    );
  }
}
