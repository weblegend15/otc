import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ApproveGroupModal from './ApproveGroupModal';

import { approveGroupRequest } from '../../screens/app/Groups/redux/actions';
import toggleModal from '../redux/actions';

ApproveGroupModal.propTypes = {
  approveGroupRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  groupId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

ApproveGroupModal.defaultProps = {
  groupId: '',
};

const mapStateToProps = state => ({
  groupId: state.modal.modalData,
  loading: state.app.group.group.loading,
});

const mapDispatchToProps = {
  approveGroupRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApproveGroupModal);
