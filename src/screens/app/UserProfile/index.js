import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserProfile from './UserProfile';
import { getProfileRequest } from '../redux/actions';
import './UserProfile.scss';

UserProfile.propTypes = {
  getProfileRequest: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  profileLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profile: state.app.profile,
  profileLoading: state.app.profileLoading,
});
const mapDispatchToProps = {
  getProfileRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
