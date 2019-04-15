import React, { Component, Fragment } from 'react';
import {
  LoadingContainer,
  Row,
  Timestamp,
  Rating,
  Col,
  Pagination,
} from '../../../../../components';

import { PAGE_LIMIT } from '../../../../../config';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.getFeedbackList();
  }

  getFeedbackList(currentPage) {
    const {
      getFeedbackListRequest,
      user: { data },
    } = this.props;
    getFeedbackListRequest({
      limit: PAGE_LIMIT,
      skip: (currentPage || 0) * PAGE_LIMIT,
      memberId: data._id,
    });
  }

  handlePageChange = value => {
    this.setState({ currentPage: value });
    this.getFeedbackList(value);
  };

  renderFeedback = feedback => {
    return (
      <div
        key={feedback._id}
        className="m-0 p-4 border-bottom border-default-color d-flex flex-column"
      >
        <Row className="m-0 d-flex flex-column">
          <p className="mb-1 text-primary font-weight-bold p-lg">
            Transaction in {feedback.group.name}
          </p>
          <div className="mb-3 d-flex flex-row">
            <div className="opacity-5 d-flex flex-row">
              Left on&nbsp;&nbsp;
              <Timestamp timestamp={feedback.updatedAt} format="MMM D, YYYY" />
              &nbsp;&nbsp;by
            </div>
            &nbsp;&nbsp;
            <p className="text-primary font-weight-semibold">
              {feedback.fbBy.firstName} {feedback.fbBy.lastName}
            </p>
          </div>
        </Row>
        <Row className="m-0">
          <Col className="p-0 mb-2" md={5}>
            <Row className="mx-0 mb-3">
              <Col className="font-weight-semibold p-0">Communication</Col>
              <Col>
                <Rating
                  initialRating={feedback.fb.communication}
                  readonly
                  className="flex-start"
                />
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="font-weight-semibold p-0">
                Timeliness of Tansaction
              </Col>
              <Col>
                <Rating
                  initialRating={feedback.fb.timeline}
                  readonly
                  className="flex-start"
                />
              </Col>
            </Row>
          </Col>
          <Col className="p-0 p-sm mb-2" md={7}>
            {feedback.fb.comment && <p className="mb-2 opacity-5">COMMENT</p>}
            <p>{feedback.fb.comment}</p>
          </Col>
        </Row>
      </div>
    );
  };

  renderFeedbackList = () => {
    const {
      user: { data },
      feedbackList: { list },
    } = this.props;

    return (
      <Fragment>
        {list.map(item => {
          const fb =
            item.counterpart._id === data._id
              ? item.feedbackToProposal
              : item.feedbackToOffer;
          const fbBy =
            item.counterpart._id === data._id
              ? item.offeredBy
              : item.counterpart;
          return this.renderFeedback({
            ...item,
            fb,
            fbBy,
          });
        })}
      </Fragment>
    );
  };

  render() {
    const {
      feedbackList: { loading, total },
      user: { data },
    } = this.props;
    const { currentPage } = this.state;

    return (
      <Fragment>
        <LoadingContainer loading={loading}>
          <Row className="m-0 p-4 border-bottom border-default-color">
            Overall transaction feedback since
            <Timestamp
              className="ml-1 mr-3"
              timestamp={data.createdAt}
              format="MMM D, YYYY"
            />
            <Rating initialRating={data.avgRating} readonly />
          </Row>
          {this.renderFeedbackList()}
        </LoadingContainer>

        {!!total && (
          <Row className="m-0">
            <Pagination
              className="ml-auto py-5 px-2"
              total={total}
              perPage={PAGE_LIMIT}
              currentPage={currentPage}
              onChange={this.handlePageChange}
            />
          </Row>
        )}
      </Fragment>
    );
  }
}
