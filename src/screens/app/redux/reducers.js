import { combineReducers } from 'redux';

import groupReducer from '../Groups/redux/reducers';
import userReducer from '../Users/redux/reducers';
import groupAdminReducer from '../Groups/GroupAdmin/redux/reducers';
import mainReducer from '../MainArea/redux/reducers';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  groupAdmin: groupAdminReducer,
  main: mainReducer,
});
