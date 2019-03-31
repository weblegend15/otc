import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import NewGroupModalForm from './NewGroupModalForm';

NewGroupModalForm.propTypes = {
  proceeding: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  proceeding: state.app.group.group.loading,
});

const withConnect = connect(mapStateToProps)(NewGroupModalForm);

export default reduxForm({
  form: 'newGroupModalForm',
})(withConnect);
