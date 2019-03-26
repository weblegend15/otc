import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from '../screens/auth/redux/reducers';
import appReducer from '../screens/app/redux/reducers';

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  auth: authReducer,
  app: appReducer,
});
