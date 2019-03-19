import { all, fork } from 'redux-saga/effects';

import getDataSaga from './watchers/getData';
import signinSaga from '../../screens/Signin/redux/saga';

export default function* root() {
  yield all([
    fork(getDataSaga),
    fork(signinSaga),
  ]);
}