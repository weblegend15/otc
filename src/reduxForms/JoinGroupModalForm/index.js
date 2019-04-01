import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import JoinGroupModalForm from './JoinGroupModalForm';

JoinGroupModalForm.propTypes = {
  proceeding: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  proceeding: state.app.user.joinRequestLoading,
});

const withReduxForm = reduxForm({
  form: 'joinGroupModalForm',
})(JoinGroupModalForm);

export default connect(mapStateToProps)(withReduxForm);
