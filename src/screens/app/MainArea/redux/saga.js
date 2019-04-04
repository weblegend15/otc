import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../utils/notify';
import * as CONSTANTS from './constants';

import { getGroupMembersSuccess, getGroupMembersError } from './actions';

import request from '../../../../utils/apiRequest';

function* getGroupMembers(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const data = yield call(
      request,
      `/groups/${action.payload.groupId}/members`,
      'GET',
      requestData,
      true,
    );

    yield put(getGroupMembersSuccess(data));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getGroupMembersError());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(CONSTANTS.GET_GROUP_MEMBERS_REQUEST, getGroupMembers);
}
