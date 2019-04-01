import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import { getGroupsRequest } from '../../Groups/redux/actions';
import './UserProfile.scss';

UserProfile.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  groups: state.app.group.groups,
});
const mapDispatchToProps = {
  getGroupsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
