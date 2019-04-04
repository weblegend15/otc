import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainArea from './MainArea';
import './MainArea.scss';
import { getGroupsRequest } from '../Groups/redux/actions';
import { getGroupMembersRequest } from './redux/actions';
import { GroupsList } from '../Groups';

GroupsList.propTypes = {
  groups: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.group.groups,
  members: state.app.main.members,
});

const mapDispatchToProps = {
  getGroupsRequest,
  getGroupMembersRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArea);
