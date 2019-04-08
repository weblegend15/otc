import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditGroupModal from './EditGroupModal';

import { updateGroupRequest } from '../../screens/app/Groups/redux/actions';

EditGroupModal.propTypes = {
  groupData: PropTypes.object.isRequired,
  updateGroupRequest: PropTypes.func.isRequired,
  editForm: PropTypes.object,
  modalData: PropTypes.string,
};

EditGroupModal.defaultProps = {
  editForm: null,
  modalData: null,
};

const mapStateToProps = state => ({
  groupData: state.app.group.group.data,
  editForm: state.form.editGroupForm,
  fieldName: state.modal.modalData,
});

const mapDispatchToProps = {
  updateGroupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGroupModal);
