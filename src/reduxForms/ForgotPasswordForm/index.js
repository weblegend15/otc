import { reduxForm } from 'redux-form';
import ForgotPasswordForm from './ForgotPasswordForm';

const withReduxform = reduxForm({
  form: 'forgotPasswordForm',
})(ForgotPasswordForm);

export default withReduxform;
