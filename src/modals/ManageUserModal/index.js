import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ManageUserModal from './ManageUserModal';

import toggleModal from '../redux/actions';

import {
  banUserRequest,
  unbanUserRequest,
  makeAdminRequest,
} from '../../screens/app/Groups/GroupAdmin/redux/actions';

ManageUserModal.propTypes = {
  banUserRequest: PropTypes.func.isRequired,
  unbanUserRequest: PropTypes.func.isRequired,
  makeAdminRequest: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  banUserLoading: state.app.groupAdmin.banUserLoading,
  makeAdminLoading: state.app.groupAdmin.makeAdminLoading,
  modalData: state.modal.modalData,
});

const mapDispatchToProps = {
  banUserRequest,
  unbanUserRequest,
  makeAdminRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageUserModal);
