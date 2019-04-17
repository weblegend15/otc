import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, change } from 'redux-form';
import PersonalDataForm from './PersonalDataForm';
import './PersonalDataForm.scss';

PersonalDataForm.propTypes = {
  profile: PropTypes.object.isRequired,
  personalDataFormValues: PropTypes.object,
  selectState: PropTypes.func.isRequired,
};

PersonalDataForm.defaultProps = {
  personalDataFormValues: null,
};

const mapStateToProps = state => ({
  profile: state.app.user.profile,
  personalDataFormValues: getFormValues('personalDataForm')(state),
});

const mapDispatchToProps = {
  selectState: value => change('personalDataForm', 'state', value),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalDataForm);

export default reduxForm({
  form: 'personalDataForm',
})(withConnect);
