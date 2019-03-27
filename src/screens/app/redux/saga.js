import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as CONSTANTS from './constants';

import {
  getGroupsSuccess,
  getGroupsError,
  getProfileSuccess,
  getProfileError,
} from './actions';

import request from '../../../utils/apiRequest';

function* getGroups(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const data = yield call(request, '/groups', 'GET', requestData, true);

    yield put(getGroupsSuccess(data));
  } catch (err) {
    toast.error(err.message);
    yield put(getGroupsError());
  }
}

function* getProfile() {
  try {
    const profile = yield call(request, '/profile', 'GET', null, true);

    yield put(getProfileSuccess(profile));
  } catch (err) {
    toast.error(err.message);
    yield put(getProfileError());
  }
}

export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_GROUPS_REQUEST, getGroups);
  yield takeLatest(CONSTANTS.GET_PROFILE_REQUEST, getProfile);
}
