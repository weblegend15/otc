import { reduxForm } from 'redux-form';
import Signup from './Signup';
import './Signup.scss';

export default reduxForm({
  form: 'signupForm',
})(Signup);
