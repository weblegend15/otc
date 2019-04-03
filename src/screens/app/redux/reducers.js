import { combineReducers } from 'redux';

import groupReducer from '../Groups/redux/reducers';
import userReducer from '../Users/redux/reducers';
import dashboardReducer from '../Dashboard/redux/reducers';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});
