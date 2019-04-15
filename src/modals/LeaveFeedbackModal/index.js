import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeaveFeedbackModal from './LeaveFeedbackModal';

import {
  leaveFeedbackRequest,
  leaveFeedbackToOfferRequest,
} from '../../screens/app/MainArea/MemberContent/Feedback/redux/actions';
import { readUserRequest } from '../../screens/app/MainArea/redux/actions';

LeaveFeedbackModal.propTypes = {
  leaveFeedbackRequest: PropTypes.func.isRequired,
  feedback: PropTypes.object.isRequired,
  readUserRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  feedback: state.app.feedback.feedback,
  modalData: state.modal.modalData,
  user: state.app.main.user,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  leaveFeedbackRequest,
  readUserRequest,
  leaveFeedbackToOfferRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaveFeedbackModal);
