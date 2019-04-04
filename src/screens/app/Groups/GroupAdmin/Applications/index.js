import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Applications from './Applications';

import { readGroupRequest, listMembersRequest } from '../../redux/actions';
import toggleModal from '../../../../../modals/redux/actions';

Applications.propTypes = {
  groupMembers: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
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
)(Applications);
