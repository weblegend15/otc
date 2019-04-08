import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import EditGroupForm from './EditGroupForm';

EditGroupForm.propTypes = {
  proceeding: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  proceeding: state.app.group.group.loading,
});

const withConnect = connect(mapStateToProps)(EditGroupForm);

export default reduxForm({
  form: 'editGroupForm',
})(withConnect);
