import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as CONSTANTS from './constants';

import {
  getGroupsSuccess,
  getGroupsError,
  createGroupSuccess,
  createGroupError,
  getGroupsRequest,
} from './actions';

import request from '../../../utils/apiRequest';
import { PAGE_LIMIT } from '../../../config';

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

function* createGroup(action) {
  try {
    const requestData = {
      name: action.payload.name,
      description: action.payload.description,
    };

    const data = yield call(request, '/groups', 'POST', requestData, true);

    yield put(createGroupSuccess(data));
    yield put(getGroupsRequest({ limit: PAGE_LIMIT, skip: 0 }));
  } catch (err) {
    toast.error(err.message);
    yield put(createGroupError());
  }
}

export default function* appSaga() {
  yield takeLatest(CONSTANTS.GET_GROUPS_REQUEST, getGroups);
  yield takeLatest(CONSTANTS.CREATE_GROUP_REQUEST, createGroup);
}
