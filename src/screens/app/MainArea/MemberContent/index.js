import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MemberContent from './MemberContent';
import './MemberContent.scss';
import {
  readUserRequest,
  createPrivateChatRequest,
  setResetMessages,
} from '../redux/actions';

MemberContent.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
  selectedGroupMemberId: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  readUserRequest: PropTypes.func.isRequired,
  setResetMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  selectedGroupMemberId: state.app.main.selectedGroupMemberId,
  userData: state.app.main.user,
});

const mapDispatchToProps = {
  readUserRequest,
  createPrivateChatRequest,
  setResetMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemberContent);
