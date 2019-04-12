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
      <Row className="m-0 p-4 border-bottom border-default-color">
        <Row className="m-0 d-flex flex-column">
          <p className="mb-1 navtext-primary font-weight-bold p-lg">
            Transaction in Crypto OTC group
          </p>
          <div className="mb-3 d-flex flex-row">
            <p className="opacity-5">Left on Dec 15, 2018 by</p>&nbsp;
            <p className="text-primary font-weight-semibold">John Smith</p>
          </div>
        </Row>
        <Row className="m-0">
          <Col className="p-0 mb-2" md={5}>
            <Row className="mx-0 mb-3">
              <Col className="font-weight-semibold p-0">Communication</Col>
              <Col>
                <Rating initialRating={3} readonly className="flex-start" />
              </Col>
            </Row>
            <Row className="m-0">
              <Col className="font-weight-semibold p-0">
                Timeliness of Tansaction
              </Col>
              <Col>
                <Rating initialRating={4} readonly className="flex-start" />
              </Col>
            </Row>
          </Col>
          <Col className="p-0 p-sm mb-2" md={7}>
            <p className="mb-2 opacity-5">COMMENT</p>
            <p>{feedback.comment}</p>
          </Col>
        </Row>
      </Row>
    );
  };

  renderFeedbackList = () => {
    const {
      feedbackList: { list, total },
    } = this.props;
    const { currentPage } = this.state;

    const feedback = {
      comment:
        'Faucibus in ornare quam viverra orci sagittis eu. Pellentesque elit eget gravida cum. Magna fermentum iaculis eu non diam phasellus. Id diam vel quam elementum pulvinar etiam non. ',
    };

    return (
      <Fragment>
        {/* {list.map(this.renderFeedback)} */}
        {this.renderFeedback(feedback)}
        <Row className="m-0">
          <Pagination
            className="ml-auto py-5 px-2"
            total={total}
            perPage={PAGE_LIMIT}
            currentPage={currentPage}
            onChange={this.handlePageChange}
          />
        </Row>
      </Fragment>
    );
  };

  render() {
    const {
      feedbackList: { list, loading },
      user: { data },
    } = this.props;

    return (
      <LoadingContainer loading={loading}>
        <Row className="m-0 p-4 border-bottom border-default-color">
          Overall transaction feedback since
          <Timestamp
            className="ml-1 mr-3"
            timestamp={data.createdAt}
            format="MM D, YYYY"
          />
          <Rating initialRating={data.avgRating} readonly />
        </Row>
        {this.renderFeedbackList()}
      </LoadingContainer>
    );
  }
}
