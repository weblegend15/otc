import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MembersBar from './MembersBar';
import './MembersBar.scss';

import { getActiveMembers } from '../../../../selectors';

import { getGroupMembersRequest, selectGroupMember } from '../redux/actions';

MembersBar.propTypes = {
  getGroupMembersRequest: PropTypes.func.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  activeMembers: PropTypes.object.isRequired,
  selectGroupMember: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  activeMembers: getActiveMembers(state),
  selectedGroupMemberId: state.app.main.selectedGroupMemberId,
});

const mapDispatchToProps = {
  getGroupMembersRequest,
  selectGroupMember,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersBar);
