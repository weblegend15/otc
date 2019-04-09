import { all, fork } from 'redux-saga/effects';

import groupSaga from '../Groups/redux/saga';
import userSaga from '../Users/redux/saga';
import groupAdminSaga from '../Groups/GroupAdmin/redux/saga';
import mainSaga from '../MainArea/redux/saga';
import offerSaga from '../MainArea/GroupContent/redux/saga';
import proposalSaga from '../MainArea/GroupContent/Proposals/redux/saga';

export default function* appSaga() {
  yield all([
    fork(groupSaga),
    fork(userSaga),
    fork(groupAdminSaga),
    fork(mainSaga),
    fork(offerSaga),
    fork(proposalSaga),
  ]);
}
