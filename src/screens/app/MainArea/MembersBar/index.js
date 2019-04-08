import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MembersBar from './MembersBar';
import './MembersBar.scss';

import { getGroupMembersRequest, selectGroupMember } from '../redux/actions';

MembersBar.propTypes = {
  getGroupMembersRequest: PropTypes.func.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  members: PropTypes.object.isRequired,
  selectGroupMember: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  members: state.app.main.members,
  selectedGroupMemberId: state.app.main.selectedGroupMemberId,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  getGroupMembersRequest,
  selectGroupMember,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersBar);
