import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeaveFeedbackModal from './LeaveFeedbackModal';

import { leaveFeedbackRequest } from '../../screens/app/MainArea/MemberContent/Feedback/redux/actions';
import { readUserRequest } from '../../screens/app/MainArea/redux/actions';

LeaveFeedbackModal.propTypes = {
  leaveFeedbackRequest: PropTypes.func.isRequired,
  feedback: PropTypes.object.isRequired,
  readUserRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  feedback: state.app.feedback.feedback,
  modalData: state.modal.modalData,
  user: state.app.main.user,
});

const mapDispatchToProps = {
  leaveFeedbackRequest,
  readUserRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaveFeedbackModal);
