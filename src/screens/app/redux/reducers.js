import { combineReducers } from 'redux';

import groupReducer from '../Groups/redux/reducers';
import userReducer from '../Users/redux/reducers';
import groupAdminReducer from '../Groups/GroupAdmin/redux/reducers';
import mainReducer from '../MainArea/redux/reducers';
import offerReducer from '../MainArea/GroupContent/redux/reducers';
import proposalReducer from '../MainArea/GroupContent/Proposals/redux/reducers';
import vouchReducer from '../MainArea/GroupContent/Vouches/redux/reducers';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  groupAdmin: groupAdminReducer,
  main: mainReducer,
  offer: offerReducer,
  proposal: proposalReducer,
  vouch: vouchReducer,
});
