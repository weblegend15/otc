import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupProfile from './GroupProfile';
import { readGroupRequest } from '../redux/actions';
import toggleModal from '../../../../modals/redux/actions';

GroupProfile.propTypes = {
  group: PropTypes.object.isRequired,
  readGroupRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const matStateToProps = state => ({
  group: state.app.group.group,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  readGroupRequest,
  toggleModal,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(GroupProfile);
