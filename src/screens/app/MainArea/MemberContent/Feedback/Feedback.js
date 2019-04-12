import React, { Component } from 'react';
import { LoadingContainer } from '../../../../../components';

export default class Feedback extends Component {
  componentDidMount() {
    const {
      getFeedbackListRequest,
      user: { data },
    } = this.props;
    getFeedbackListRequest(data._id);
  }

  render() {
    const {
      feedbackList: { list, loading },
      user: { data },
    } = this.props;

    return <LoadingContainer loading={loading}>render</LoadingContainer>;
  }
}
