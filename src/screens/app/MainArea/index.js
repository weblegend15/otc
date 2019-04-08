import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainArea from './MainArea';
import './MainArea.scss';
import {
  getGroupMembersRequest,
  getPermissionGroupsRequest,
  selectActiveGroup,
  selectGroupMember,
} from './redux/actions';
import { refreshFirebaseTokenRequest } from '../../auth/redux/actions';

MainArea.propTypes = {
  groups: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  getPermissionGroupsRequest: PropTypes.func.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  selectActiveGroup: PropTypes.func.isRequired,
  selectGroupMember: PropTypes.func.isRequired,
  refreshFirebaseTokenRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.main.myGroups,
  members: state.app.main.members,
  selectedGroupId: state.app.main.selectedGroupId,
  selectedGroupMemberId: state.app.main.selectedGroupMemberId,
});

const mapDispatchToProps = {
  getPermissionGroupsRequest,
  refreshFirebaseTokenRequest,
  getGroupMembersRequest,
  selectActiveGroup,
  selectGroupMember,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArea);
