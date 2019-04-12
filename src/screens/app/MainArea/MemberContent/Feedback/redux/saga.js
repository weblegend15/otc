import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../../../utils/notify';
import * as CONSTANTS from './constants';

import { getFeedbackListSuccess, getFeedbackListError } from './actions';

import request from '../../../../../../utils/apiRequest';

function* getFeedbackList(action) {
  try {
    const { memberId } = action.payload;

    const members = yield call(
      request,
      `users/${memberId}/feedback`,
      'GET',
      null,
      true,
    );

    yield put(getFeedbackListSuccess(members));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getFeedbackListError());
  }
}

export default function* mainAreaSaga() {
  yield takeLatest(CONSTANTS.GET_FEEDBACK_LIST_REQUEST, getFeedbackList);
}
