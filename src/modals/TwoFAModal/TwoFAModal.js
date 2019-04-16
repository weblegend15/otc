import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
} from '../../components';

import { history } from '../../configureStore';

export default class TwoFAModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoFACode: '',
    };
  }

  handleGoSetting = () => {
    const { toggleModal } = this.props;
    toggleModal('twoFAModal');
    history.push('/app/settings');
  };

  handleCodeChange = e => {
    this.setState({ twoFACode: e.target.value });
  };

  handleSubmit = () => {
    const {
      modalData: { submitAction, actionPayload },
    } = this.props;
    const { twoFACode } = this.state;

    submitAction({ ...actionPayload, twoFACode });
  };

  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal('twoFAModal');
  };

  render() {
    const { show, onHide } = this.props;
    const { twoFACode } = this.state;
    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader title="Two factor authentication required for this request!" />
        <ModalBody>
          <Form.Group
            className="w-50 mx-auto text-center"
            controlId="twoFACode"
          >
            <Form.Label>Your code</Form.Label>
            <Form.Control
              className="text-center"
              type="number"
              maxLength="6"
              value={twoFACode}
              onChange={this.handleCodeChange}
              required
            />
          </Form.Group>
          <div className="mt-4 text-center font-weight-semibold">
            You do not have two factor authenticator?
          </div>
          <div className="text-center font-weight-semibold">
            Please, enable&nbsp;
            <Button
              variant="link"
              className="p-0 font-weight-semibold mb-1"
              onClick={this.handleGoSetting}
            >
              here
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-block btn-regular" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button
            variant="dark"
            className="btn-block mt-0 btn-regular"
            onClick={this.handleClose}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
