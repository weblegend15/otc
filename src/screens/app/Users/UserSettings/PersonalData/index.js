import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonalData from './PersonalData';

import { updateProfileRequest, getProfileRequest } from '../../redux/actions';

PersonalData.propTypes = {
  updateProfileRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.app.user.profile,
});

const mapDispatchToProps = {
  updateProfileRequest,
  getProfileRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalData);
