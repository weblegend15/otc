import { reduxForm } from 'redux-form';
import ConfirmPasswordForm from './ConfirmPasswordForm';

const withReduxform = reduxForm({
  form: 'confirmPasswordForm',
})(ConfirmPasswordForm);

export default withReduxform;
