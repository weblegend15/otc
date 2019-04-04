import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../utils/notify';
import * as CONSTANTS from './constants';

import {
  getGroupsSuccess,
  getGroupsError,
  createGroupSuccess,
  createGroupError,
  getGroupsRequest,
  readGroupSuccess,
  readGroupError,
  deleteGroupSuccess,
  deleteGroupError,
  approveGroupSuccess,
  approveGroupError,
  listMembersSuccess,
  listMembersError,
  updateGroupSuccess,
  updateGroupError,
} from './actions';
import toggleModal from '../../../../modals/redux/actions';

import request from '../../../../utils/apiRequest';
import { PAGE_LIMIT } from '../../../../config';

function* getGroups(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const data = yield call(request, '/groups', 'GET', requestData, true);

    yield put(getGroupsSuccess(data));
  } catch (err) {
    notify('error', err.message);
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
    yield put(toggleModal('newGroupModal'));
    yield put(getGroupsRequest({ limit: PAGE_LIMIT, skip: 0 }));
  } catch (err) {
    notify('error', err.message);
    yield put(toggleModal('newGroupModal'));
    yield put(createGroupError());
  }
}

function* readGroup(action) {
  try {
    const data = yield call(
      request,
      `/groups/${action.payload}`,
      'GET',
      null,
      true,
    );

    yield put(readGroupSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(readGroupError());
  }
}

function* deleteGroup(action) {
  try {
    yield call(request, `/groups/${action.payload}`, 'DELETE', null, true);

    yield put(deleteGroupSuccess(action.payload));
    yield put(toggleModal('deleteGroupModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(deleteGroupError());
    yield put(toggleModal('deleteGroupModal'));
  }
}

function* updateGroup(action) {
  try {
    const data = yield call(
      request,
      `/groups/${action.payload.groupId}`,
      'PUT',
      action.payload.data,
      true,
    );

    yield put(updateGroupSuccess(data));
    yield put(toggleModal('updateGroupModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(updateGroupError());
    yield put(toggleModal('updateGroupModal'));
  }
}

function* approveGroup(action) {
  try {
    const requestData = {
      status: 'ACTIVE',
    };
    yield call(request, `/groups/${action.payload}`, 'PUT', requestData, true);

    yield put(approveGroupSuccess(action.payload));
    yield put(toggleModal('approveGroupModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(approveGroupError());
    yield put(toggleModal('approveGroupModal'));
  }
}

function* listGroupMembers(action) {
  try {
    // {{host}}/groups/{{groupid}}/members?skip=0&limit=10
    const requestData = {
      skip: 0,
      limit: 20,
    };
    const data = yield call(
      request,
      `/groups/${action.payload}/members`,
      'GET',
      requestData,
      true,
    );

    yield put(listMembersSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(listMembersError());
  }
}

export default function* groupSaga() {
  yield takeLatest(CONSTANTS.GET_GROUPS_REQUEST, getGroups);
  yield takeLatest(CONSTANTS.CREATE_GROUP_REQUEST, createGroup);
  yield takeLatest(CONSTANTS.READ_GROUP_REQUEST, readGroup);
  yield takeLatest(CONSTANTS.UPDATE_GROUP_REQUEST, updateGroup);
  yield takeLatest(CONSTANTS.DELETE_GROUP_REQUEST, deleteGroup);
  yield takeLatest(CONSTANTS.APPROVE_GROUP_REQUEST, approveGroup);
  yield takeLatest(CONSTANTS.LIST_MEMBERS_REQUEST, listGroupMembers);
}
