import { all, fork } from 'redux-saga/effects';

import groupSaga from '../Groups/redux/saga';
import userSaga from '../Users/redux/saga';
import mainSaga from '../MainArea/redux/saga';
import offerSaga from '../MainArea/GroupContent/redux/saga';

export default function* appSaga() {
  yield all([fork(groupSaga), fork(userSaga), fork(mainSaga), fork(offerSaga)]);
}
