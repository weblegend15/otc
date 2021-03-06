import React, { Component } from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  GeneralAvatar,
  Rating,
  Form,
  ModalFooter,
  Button,
  LoadingContainer,
} from '../../components';

export default class LeaveFeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comm: 0,
      time: 0,
      comment: '',
    };
  }

  componentDidMount() {
    const {
      readUserRequest,
      modalData: { offerData },
    } = this.props;
    readUserRequest(offerData.counterpart);
  }

  handleRatingChange = (type, value) => {
    this.setState({ [type]: value });
  };

  handleComment = e => {
    this.setState({ comment: e.target.value });
  };

  handleProceed = () => {
    const {
      leaveFeedbackRequest,
      leaveFeedbackToOfferRequest,
      modalData: { offerData },
      currentUser,
    } = this.props;
    const { comm, time, comment } = this.state;

    const feedbackData = {
      timeline: time,
      communication: comm,
      comment,
    };
    if (offerData.counterpart === currentUser._id) {
      leaveFeedbackToOfferRequest({
        offerId: offerData._id,
        groupId: offerData.group,
        feedbackData,
      });
    } else {
      leaveFeedbackRequest({
        offerId: offerData._id,
        groupId: offerData.group,
        feedbackData,
      });
    }
  };

  render() {
    const {
      feedback: { loading },
      user: { data, loading: userLoading },
      show,
      onHide,
      modalData,
      currentUser,
    } = this.props;
    const { comm, time, comment } = this.state;

    if (!modalData) {
      return null;
    }

    const userData =
      modalData.offerData.counterpart === currentUser._id
        ? modalData.offerData.offeredBy
        : data;

    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader
          closeButton
          title="Leave feedback on recent transaction in Crypto OTC group"
        />
        <ModalBody className="border-bottom border-default-color">
          <LoadingContainer loading={userLoading}>
            <GeneralAvatar
              data={{
                firstName: userData.firstName,
                lastName: userData.lastName,
                location: `${userData.city}, ${userData.country}`,
              }}
            />
          </LoadingContainer>
        </ModalBody>
        <ModalBody>
          <div className="mb-4">
            <p className="pb-0 p-lg font-weight-semibold text-primary">
              Communication
            </p>
            <Rating
              initialRating={comm}
              onChange={value => this.handleRatingChange('comm', value)}
            />
          </div>
          <div className="mb-4">
            <p className="pb-0 p-lg font-weight-semibold text-primary">
              Timeliness of Tansaction
            </p>
            <Rating
              initialRating={time}
              onChange={value => this.handleRatingChange('time', value)}
            />
          </div>
          <Form.Group controlId="feedbackComment">
            <Form.Label>Comment (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={comment}
              onChange={this.handleComment}
            />
          </Form.Group>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-block btn-large"
            disabled={loading}
            onClick={this.handleProceed}
          >
            {loading ? 'Proceeding...' : 'I accept, proceed'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
