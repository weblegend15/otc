import { combineReducers } from 'redux';

import groupReducer from '../Groups/redux/reducers';
import userReducer from '../Users/redux/reducers';
import mainReducer from '../MainArea/redux/reducers';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  main: mainReducer,
});
