import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Feedback from './Feedback';

import { getFeedbackListRequest } from './redux/actions';

Feedback.propTypes = {
  getFeedbackListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  feedbackList: state.app.feedback.feedbackList,
  user: state.app.main.user,
});

const mapDispatchToProps = {
  getFeedbackListRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feedback);
