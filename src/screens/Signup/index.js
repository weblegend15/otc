import { reduxForm } from 'redux-form';

import Signup from './Signup';

const withReduxform = reduxForm({
  form: 'signupForm',
})(Signup);

export default withReduxform;
