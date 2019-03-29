import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import { getProfileRequest } from '../redux/actions';
import { getGroupsRequest } from '../../Groups/redux/actions';
import './UserProfile.scss';

UserProfile.propTypes = {
  getProfileRequest: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  groups: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  role: state.auth.currentUser.role,
  profile: state.app.user.profile,
  groups: state.app.group.groups,
});
const mapDispatchToProps = {
  getProfileRequest,
  getGroupsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
