import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GroupProfile from './GroupProfile';

import { readGroupRequest } from '../redux/actions';

GroupProfile.propTypes = {
  groupData: PropTypes.object.isRequired,
  groupsListLoading: PropTypes.bool.isRequired,
};

const matStateToProps = state => ({
  groupData: state.app.groupData,
  groupsListLoading: state.app.groupsListLoading,
});

const mapDispatchToProps = {
  readGroupRequest,
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(GroupProfile);
