import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../utils/notify';
import * as CONSTANTS from './constants';

import {
  getGroupMembersSuccess,
  getGroupMembersError,
  getPermissionGroupsError,
  getPermissionGroupsSuccess,
  createPrivateChatSuccess,
  createPrivateChatError,
  sendMessageSuccess,
  sendMessageError,
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
    const myGroups = yield call(
      request,
      '/profile/permissions',
      'GET',
      null,
      true,
    );
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

function* sendMessage(action) {
  try {
    const requestData = {
      text: action.message,
    };
    const responseData = yield call(
      request,
      `/groups/${action.groupId}/chats/${action.chatId}/messages`,
      'POST',
      requestData,
      true,
    );
    yield put(sendMessageSuccess(responseData));
  } catch (err) {
    notify('error', err.meesage);
    yield put(sendMessageError());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(CONSTANTS.GET_GROUP_MEMBERS_REQUEST, getGroupMembers);
  yield takeLatest(
    CONSTANTS.GET_PERMISSION_GROUPS_REQUEST,
    getPermissionGroups,
  );
  yield takeLatest(CONSTANTS.CREATE_PRIVATE_CHAT_REQUEST, createPrivateChat);
  yield takeLatest(CONSTANTS.SEND_MESSAGE_REQUEST, sendMessage);
}
