import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  acceptApplicationSuccess,
  acceptApplicationError,
  rejectApplicationSuccess,
  rejectApplicationError,
  makeAdminSuccess,
  makeAdminError,
  banUserSuccess,
  banUserError,
  unbanUserSuccess,
  unbanUserError,
} from './actions';

import toggleModal from '../../../../../modals/redux/actions';

import request from '../../../../../utils/apiRequest';
import notify from '../../../../../utils/notify';

function* acceptApplication(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload.userId}/permissions/${
        action.payload.groupId
      }/member`,
      'PUT',
      {},
      true,
    );

    yield put(acceptApplicationSuccess(data));
    yield put(toggleModal('viewApplicationModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(acceptApplicationError());
    yield put(toggleModal('viewApplicationModal'));
  }
}

function* rejectApplication(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload.userId}/permissions/${
        action.payload.groupId
      }/apply`,
      'DELETE',
      null,
      true,
    );

    yield put(rejectApplicationSuccess(data));
    yield put(toggleModal('viewApplicationModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(rejectApplicationError());
    yield put(toggleModal('viewApplicationModal'));
  }
}

function* makeAdmin(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload.userId}/permissions/${
        action.payload.groupId
      }/admin`,
      'PUT',
      {},
      true,
    );

    yield put(makeAdminSuccess(data));
    yield put(toggleModal('manageUserModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(makeAdminError());
    yield put(toggleModal('manageUserModal'));
  }
}

function* banUser(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload.userId}/permissions/${
        action.payload.groupId
      }/ban`,
      'PUT',
      {},
      true,
    );

    yield put(banUserSuccess(data));
    yield put(toggleModal('manageUserModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(banUserError());
    yield put(toggleModal('manageUserModal'));
  }
}

function* unbanUser(action) {
  try {
    const data = yield call(
      request,
      `/users/${action.payload.userId}/permissions/${
        action.payload.groupId
      }/ban`,
      'DELETE',
      null,
      true,
    );

    yield put(unbanUserSuccess(data));
    yield put(toggleModal('unbanUserModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(unbanUserError());
    yield put(toggleModal('unbanUserModal'));
  }
}

export default function* userSaga() {
  yield takeLatest(CONSTANTS.ACCEPT_APPLICATION_REQUEST, acceptApplication);
  yield takeLatest(CONSTANTS.REJECT_APPLICATION_REQUEST, rejectApplication);

  yield takeLatest(CONSTANTS.MAKE_ADMIN_REQUEST, makeAdmin);
  yield takeLatest(CONSTANTS.BAN_USER_REQUEST, banUser);
  yield takeLatest(CONSTANTS.UNBAN_USER_REQUEST, unbanUser);
}
