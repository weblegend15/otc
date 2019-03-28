import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import { getProfileSuccess, getProfileError } from './actions';

import request from '../../../../utils/apiRequest';
import notify from '../../../../utils/notify';

function* getProfile() {
  try {
    const profile = yield call(request, '/profile', 'GET', null, true);

    yield put(getProfileSuccess(profile));
  } catch (err) {
    notify('error', err.message);
    yield put(getProfileError());
  }
}

export default function* userSaga() {
  yield takeLatest(CONSTANTS.GET_PROFILE_REQUEST, getProfile);
}
