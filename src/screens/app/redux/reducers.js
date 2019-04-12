import { combineReducers } from 'redux';

import groupReducer from '../Groups/redux/reducers';
import userReducer from '../Users/redux/reducers';
import groupAdminReducer from '../Groups/GroupAdmin/redux/reducers';
import mainReducer from '../MainArea/redux/reducers';
import offerReducer from '../MainArea/GroupContent/redux/reducers';
import proposalReducer from '../MainArea/GroupContent/Proposals/redux/reducers';
import vouchReducer from '../MainArea/GroupContent/Vouches/redux/reducers';
import groupProposalsReducer from '../MainArea/GroupContent/VouchesProposals/ActiveProposals/redux/reducers';
import feedbackReducer from '../MainArea/MemberContent/Feedback/redux/reducers';
import chatsReducer from '../MainArea/Chat/redux/reducers';
import memberOffersReducer from '../MainArea/MemberContent/CurrentOffers/redux/reducers';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  groupAdmin: groupAdminReducer,
  main: mainReducer,
  offer: offerReducer,
  proposal: proposalReducer,
  vouch: vouchReducer,
  groupProposals: groupProposalsReducer,
  feedback: feedbackReducer,
  chats: chatsReducer,
  memberOffers: memberOffersReducer,
});
