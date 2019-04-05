import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from '../screens/auth/redux/reducers';
import appReducer from '../screens/app/redux/reducers';
import modalReducer from '../modals/redux/reducers';

const topReducer = combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  auth: authReducer,
  app: appReducer,
  modal: modalReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT') {
    localStorage.removeItem('persist:root');
    state = undefined; // eslint-disable-line
  }
  return topReducer(state, action);
};

export default rootReducer;
