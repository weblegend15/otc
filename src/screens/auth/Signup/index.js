import { reduxForm } from 'redux-form';

import Signup from './Signup';

export default reduxForm({
  form: 'signupForm',
})(Signup);
