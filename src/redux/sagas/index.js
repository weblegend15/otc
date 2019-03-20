import { all, fork } from 'redux-saga/effects';

import signinSaga from '../../screens/Signin/redux/saga';

export default function* root() {
  yield all([
    fork(signinSaga),
  ]);
}