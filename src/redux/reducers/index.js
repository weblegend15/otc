import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import dataReducer from './data';
import signinReducer from '../../screens/Signin/redux/reducers';

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  userData: dataReducer,
  signin: signinReducer,
});