import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import './Dashboard.scss';
import { getGroupsRequest } from '../../Groups/redux/actions';
import { getGroupMembersRequest } from '../redux/actions';
import { GroupsList } from '../../Groups';

GroupsList.propTypes = {
  groups: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.group.groups,
  members: state.app.dashboard.members,
});

const mapDispatchToProps = {
  getGroupsRequest,
  getGroupMembersRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
