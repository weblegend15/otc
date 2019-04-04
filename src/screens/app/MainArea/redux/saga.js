import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../utils/notify';
import * as CONSTANTS from './constants';

import {
  getGroupMembersSuccess,
  getGroupMembersError,
  getPermissionGroupsError,
  getPermissionGroupsSuccess,
} from './actions';

import request from '../../../../utils/apiRequest';

function* getGroupMembers(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const members = yield call(
      request,
      `/groups/${action.payload.groupId}/members`,
      'GET',
      requestData,
      true,
    );

    yield put(getGroupMembersSuccess(members));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getGroupMembersError());
  }
}

function* getPermissionGroups() {
  try {
    const myGroups = yield call(request, '/profile/permissions', 'GET', null, true);
    yield put(getPermissionGroupsSuccess(myGroups.groups));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getPermissionGroupsError());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(CONSTANTS.GET_GROUP_MEMBERS_REQUEST, getGroupMembers);
  yield takeLatest(CONSTANTS.GET_PERMISSION_GROUPS_REQUEST, getPermissionGroups);
}
