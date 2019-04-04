import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteGroupModal from './DeleteGroupModal';

import { deleteGroupRequest } from '../../screens/app/Groups/redux/actions';
import toggleModal from '../redux/actions';

DeleteGroupModal.propTypes = {
  deleteGroupRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  groupId: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

DeleteGroupModal.defaultProps = {
  groupId: '',
};

const mapStateToProps = state => ({
  groupId: state.modal.modalData,
  loading: state.app.group.group.loading,
});

const mapDispatchToProps = {
  deleteGroupRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteGroupModal);
