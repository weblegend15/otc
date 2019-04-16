import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GroupsList from './GroupsList';
import './GroupsList.scss';
import { getGroupsRequest, setNotifications } from '../redux/actions';
import toggleModal from '../../../../modals/redux/actions';

GroupsList.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroupsRequest: PropTypes.func.isRequired,
  setNotifications: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groups: state.app.group.groups,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  getGroupsRequest,
  toggleModal,
  setNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsList);
