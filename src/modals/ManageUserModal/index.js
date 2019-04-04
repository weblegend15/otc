import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ManageUserModal from './ManageUserModal';

import {
  banUserRequest,
  makeAdminRequest,
} from '../../screens/app/Groups/GroupAdmin/redux/actions';

ManageUserModal.propTypes = {
  banUserRequest: PropTypes.func.isRequired,
  makeAdminRequest: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  banUserLoading: state.app.groupAdmin.banUserLoading,
  makeAdminLoading: state.app.groupAdmin.makeAdminLoading,
  modalData: state.modal.modalData,
});

const mapDispatchToProps = {
  banUserRequest,
  makeAdminRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageUserModal);
