import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getVouchesSuccess,
  getVouchesError,
  createVouchSuccess,
  createVouchError,
  deleteVouchSuccess,
  deleteVouchError,
  acceptVouchSuccess,
  acceptVouchError,
  rejectVouchSuccess,
  rejectVouchError,
} from './actions';

import toggleModal from '../../../../../../modals/redux/actions';

import notify from '../../../../../../utils/notify';
import request from '../../../../../../utils/apiRequest';

function* getVouches(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/vouches`,
      'GET',
      requestData,
      true,
    );

    yield put(getVouchesSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(getVouchesError());
  }
}

function* createVouch(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const requestData = action.payload.vouchData;

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/vouches`,
      'POST',
      requestData,
      true,
    );

    yield put(createVouchSuccess(data));
    yield put(toggleModal('requestVouchModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(createVouchError());
    yield put(toggleModal('requestVouchModal'));
  }
}

function* deleteVouch(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { vouchId } = action.payload;

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/vouches/${vouchId}`,
      'DELETE',
      null,
      true,
    );

    yield put(deleteVouchSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(deleteVouchError());
  }
}

function* acceptVouch(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { vouchId } = action.payload;

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/vouches/${vouchId}/accept`,
      'PUT',
      {},
      true,
    );

    yield put(acceptVouchSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(acceptVouchError());
  }
}

function* rejectVouch(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { vouchId } = action.payload;

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/vouches/${vouchId}/reject`,
      'PUT',
      {},
      true,
    );

    yield put(rejectVouchSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(rejectVouchError());
  }
}

export default function* voucheSaga() {
  yield takeLatest(CONSTANTS.GET_VOUCHES_REQUEST, getVouches);
  yield takeLatest(CONSTANTS.CREATE_VOUCH_REQUEST, createVouch);
  yield takeLatest(CONSTANTS.DELETE_VOUCH_REQUEST, deleteVouch);
  yield takeLatest(CONSTANTS.ACCEPT_VOUCH_REQUEST, acceptVouch);
  yield takeLatest(CONSTANTS.REJECT_VOUCH_REQUEST, rejectVouch);
}
