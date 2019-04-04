import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import './Dashboard.scss';
import { getGroupsRequest, readGroupRequest } from '../../Groups/redux/actions';
import { getGroupMembersRequest } from '../redux/actions';
import { GroupsList } from '../../Groups';

GroupsList.propTypes = {
  group: PropTypes.object.isRequired,
  groups: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  readGroupRequest: PropTypes.func.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  group: state.app.group.group,
  groups: state.app.group.groups,
  members: state.app.dashboard.members,
});

const mapDispatchToProps = {
  getGroupsRequest,
  getGroupMembersRequest,
  readGroupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
