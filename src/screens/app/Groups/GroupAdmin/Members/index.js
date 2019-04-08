import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Members from './Members';

import toggleModal from '../../../../../modals/redux/actions';
import { readGroupRequest, listMembersRequest } from '../../redux/actions';

Members.propTypes = {
  group: PropTypes.object.isRequired,
  groupMembers: PropTypes.object.isRequired,
  readGroupRequest: PropTypes.func.isRequired,
  listMembersRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  group: state.app.group.group,
  groupMembers: state.app.group.groupMembers,
});

const mapDispatchToProps = {
  readGroupRequest,
  listMembersRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
