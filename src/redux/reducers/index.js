import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import signinReducer from '../../screens/Signin/redux/reducers';
import signupReducer from '../../screens/Signup/redux/reducers';
import sendConfirmReducer from '../../screens/SendConfirm/redux/reducers';
import verifyEmailReducer from '../../screens/VerifyEmail/redux/reducers';

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  signin: signinReducer,
  signup: signupReducer,
  confirm: sendConfirmReducer,
  verifyEmail: verifyEmailReducer,
});
