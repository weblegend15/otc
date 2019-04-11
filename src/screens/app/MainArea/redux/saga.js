import { put, takeLatest, call, select } from 'redux-saga/effects';
import notify from '../../../../utils/notify';
import * as CONSTANTS from './constants';

import { getMyActiveGroups } from '../../../../utils/permission';

import {
  getGroupMembersSuccess,
  getGroupMembersError,
  getPermissionGroupsError,
  getPermissionGroupsSuccess,
  createPrivateChatSuccess,
  createPrivateChatError,
  selectActiveGroup,
  readUserSuccess,
  readUserError,
} from './actions';

import request from '../../../../utils/apiRequest';
import { history } from '../../../../configureStore';
import { firebaseAuth } from '../../Services/firebase';

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
    const myGroups = yield call(
      request,
      '/profile/permissions',
      'GET',
      null,
      true,
    );

    const myActiveGroups = yield getMyActiveGroups(myGroups.groups);
    const selectedGroupId = yield select(
      state => state.app.main.selectedGroupId,
    );

    if (!myActiveGroups.length) {
      yield put(selectActiveGroup(''));
    } else if (
      myActiveGroups.map(item => item._id).indexOf(selectedGroupId) < 0
    ) {
      yield put(selectActiveGroup(myActiveGroups[0]._id));
      history.push(`/app/my-groups/${myActiveGroups[0]._id}/group`);
    }

    yield put(getPermissionGroupsSuccess(myGroups.groups));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getPermissionGroupsError());
  }
}

function* createPrivateChat(action) {
  try {
    const requestData = {
      userId: action.id,
    };

    const responseData = yield call(
      request,
      `/groups/${action.groupId}/chats`,
      'POST',
      requestData,
      true,
    );
    yield put(createPrivateChatSuccess(responseData));
  } catch (err) {
    notify('error', err.message);
    yield put(createPrivateChatError());
  }
}

function* readUser(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload}`,
      'GET',
      null,
      true,
    );

    yield put(readUserSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(readUserError());
  }
}

function* refreshToken() {
  try {
    const responseData = yield call(
      request,
      '/profile/refresh-firebase-token',
      'GET',
      null,
      true,
    );
    yield firebaseAuth(responseData.firebaseToken);
  } catch (err) {
    notify('error', err.message);
  }
}

export default function* mainAreaSaga() {
  yield takeLatest(CONSTANTS.GET_GROUP_MEMBERS_REQUEST, getGroupMembers);
  yield takeLatest(
    CONSTANTS.GET_PERMISSION_GROUPS_REQUEST,
    getPermissionGroups,
  );
  yield takeLatest(CONSTANTS.CREATE_PRIVATE_CHAT_REQUEST, createPrivateChat);
  yield takeLatest(CONSTANTS.READ_USER_REQUEST, readUser);
  yield takeLatest(CONSTANTS.REFRESH_FIREBASE_TOKEN_REQUEST, refreshToken);
}
