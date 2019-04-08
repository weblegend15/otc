import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  OfferDetail,
} from '../../components';

export default class NewGroupModal extends Component {
  handleTradeClick = () => {
    const {
      data: { offerId },
    } = this.props;

    // TODO handle trade
  };

  render() {
    const {
      createGroupRequest,
      data: { offerData },
      ...rest
    } = this.props;

    return (
      <Modal {...rest}>
        <ModalHeader closeButton className="border-0 pb-2" title="Offer" />
        <ModalBody className="p-0">
          <OfferDetail data={offerData} />
        </ModalBody>
        <ModalFooter>
          <Button className="btn-block" onClick={this.handleTradeClick}>
            Trade
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
