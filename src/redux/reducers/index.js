import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import dataReducer from './data';

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  userData: dataReducer,
});