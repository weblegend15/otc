import { all, fork } from 'redux-saga/effects';

import getDataSaga from './watchers/getData';

export default function* root() {
  yield all([
    fork(getDataSaga),
  ]);
}