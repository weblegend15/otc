import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainArea from './MainArea';
import './MainArea.scss';
import { getGroupMembersRequest, getPermissionGroupsRequest } from './redux/actions';
import { GroupsList } from '../Groups';

GroupsList.propTypes = {
  groups: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  getPermissionGroupsRequest: PropTypes.func.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.main.myGroups,
  members: state.app.main.members,
});

const mapDispatchToProps = {
  getPermissionGroupsRequest,
  getGroupMembersRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArea);
