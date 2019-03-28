import { all, fork } from 'redux-saga/effects';

import groupSaga from '../Groups/redux/saga';
import userSaga from '../Users/redux/saga';

export default function* appSaga() {
  yield all([fork(groupSaga), fork(userSaga)]);
}
