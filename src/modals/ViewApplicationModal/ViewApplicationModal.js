import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Rating,
  SocialIcons,
  Icon,
} from '../../components';

export default class ViewApplicationModal extends Component {
  handleApprove = () => {
    const {
      acceptApplicationRequest,
      data: { userData, groupId },
    } = this.props;
    acceptApplicationRequest(userData._id, groupId);
  };

  handleDeny = () => {
    const {
      rejectApplicationRequest,
      data: { userData, groupId },
    } = this.props;
    rejectApplicationRequest(userData._id, groupId);
  };

  render() {
    const {
      data,
      groupData,
      show,
      onHide,
      acceptApplicationLoading,
      rejectApplicationLoading,
    } = this.props;

    if (!data) {
      return '';
    }

    const { userData } = data;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader
          closeButton
          title={groupData.name}
          description="Application to join"
        />
        <ModalBody className="border-bottom">
          <p className="p-sm opacity-5 text-uppercase">from</p>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="p-lg font-weight-bold">
              {userData.firstName} {userData.lastName}
            </p>
            <p className="text-primary font-weight-semibold p-sm">
              <Icon name="check-circle" className="mr-3" />
              KYC/AML Verified
            </p>
            <p className="text-primary">
              View Profile
              <Icon name="arrow-right" className="ml-3" />
            </p>
          </div>
          <p>{userData.email}</p>
          <p>{userData.phoneNumber}</p>
          <div className="mb-3">
            <p className="p-sm opacity-5 text-uppercase">Feedback score</p>
            <div className="d-flex flex-row">
              {userData.avgRating}/{userData.ratingCount}
              <Rating
                initialRating={userData.avgRating}
                className="ml-4"
                readonly
              />
            </div>
          </div>
          <div className="mb-3">
            <p className="p-sm opacity-5 text-uppercase">Address</p>
            <p>{userData.address}</p>
          </div>
          <div className="d-flex flex-row">
            <Button
              variant="outline-primary"
              className="text-uppercase"
              icon="envelope"
            >
              <Icon name="envelope" />
              &nbsp;&nbsp;Message
            </Button>
            <SocialIcons />
          </div>
        </ModalBody>
        <ModalBody>
          <p className="text-primary font-weight-bold p-lg">Questionnaire</p>
          <p className="font-weight-semibold">1. Question Example</p>
          <p className="text-uppercase p-sm opacity-5">ANSWER</p>
          <p>
            Lorem ipsum dolor sit amet, nec sensibus incorrupte ea, harum iriure
            voluptua an mel. Viris affert repudiare te mea, ne putant indoctum
            ius, inani populo sapientem vix at.
          </p>
          <p className="font-weight-semibold">2. Question Example</p>
          <p className="text-uppercase p-sm opacity-5">ANSWER</p>
          <p>
            Lorem ipsum dolor sit amet, nec sensibus incorrupte ea, harum iriure
            voluptua an mel. Viris affert repudiare te mea, ne putant indoctum
            ius, inani populo sapientem vix at.
          </p>
          <p className="font-weight-semibold">3. Question Example</p>
          <p className="text-uppercase p-sm opacity-5">ANSWER</p>
          <p>
            Lorem ipsum dolor sit amet, nec sensibus incorrupte ea, harum iriure
            voluptua an mel. Viris affert repudiare te mea, ne putant indoctum
            ius, inani populo sapientem vix at.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-50"
            disabled={acceptApplicationLoading}
            onClick={this.handleApprove}
          >
            {acceptApplicationLoading ? 'Approving...' : 'Approve'}
          </Button>
          <Button
            className="w-50"
            variant="dark"
            disabled={rejectApplicationLoading}
            onClick={this.handleDeny}
          >
            {rejectApplicationLoading ? 'Declining...' : 'Decline'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
