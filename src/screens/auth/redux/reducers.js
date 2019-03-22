import { combineReducers } from 'redux';

import signinReducer from '../Signin/redux/reducers';
import signupReducer from '../Signup/redux/reducers';
import sendConfirmReducer from '../SendConfirm/redux/reducers';
import verifyEmailReducer from '../VerifyEmail/redux/reducers';

export default combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  confirm: sendConfirmReducer,
  verifyEmail: verifyEmailReducer,
});
