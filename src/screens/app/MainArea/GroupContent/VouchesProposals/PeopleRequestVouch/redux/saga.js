import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getMyVouchesSuccess,
  getMyVouchesError,
  acceptVouchSuccess,
  acceptVouchError,
  rejectVouchSuccess,
  rejectVouchError,
} from './actions';

import toggleModal from '../../../../../../../modals/redux/actions';
import request from '../../../../../../../utils/apiRequest';
import notify from '../../../../../../../utils/notify';

function* getMyVouches(action) {
  try {
    const { groupId } = action.payload;
    const requestData = {
      limit: action.payload.limit,
      skip: action.payload.skip,
      filters: action.payload.filters,
    };

    const data = yield call(
      request,
      `/profile/my-groups/${groupId}/vouches`,
      'GET',
      requestData,
      true,
    );

    yield put(getMyVouchesSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(getMyVouchesError());
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
    yield put(toggleModal('viewVouchModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(acceptVouchError());
    yield put(toggleModal('viewVouchModal'));
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
    yield put(toggleModal('viewVouchModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(rejectVouchError());
    yield put(toggleModal('viewVouchModal'));
  }
}

export default function* myGroupVouchesSaga() {
  yield takeLatest(CONSTANTS.GET_MY_VOUCHES_REQUEST, getMyVouches);
  yield takeLatest(CONSTANTS.ACCEPT_VOUCH_REQUEST, acceptVouch);
  yield takeLatest(CONSTANTS.REJECT_VOUCH_REQUEST, rejectVouch);
}
