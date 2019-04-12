import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../../../utils/notify';
import * as CONSTANTS from './constants';

import {
  getFeedbackListSuccess,
  getFeedbackListError,
  leaveFeedbackSuccess,
  leaveFeedbackError,
} from './actions';

import toggleModal from '../../../../../../modals/redux/actions';

import request from '../../../../../../utils/apiRequest';

function* getFeedbackList(action) {
  try {
    const requestData = {
      limit: action.payload.limit,
      skip: action.payload.skip,
    };
    const { memberId } = action.payload;

    const members = yield call(
      request,
      `/users/${memberId}/feedback`,
      'GET',
      requestData,
      true,
    );

    yield put(getFeedbackListSuccess(members));
  } catch (err) {
    notify('error', err.meesage);
    yield put(getFeedbackListError());
  }
}

function* leaveFeedback(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const requestData = action.payload.feedbackData;

    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/leave-feedback-to-proposal`,
      'PUT',
      requestData,
      true,
    );

    yield put(leaveFeedbackSuccess(data));
    yield put(toggleModal('leaveFeedbackModal'));
  } catch (err) {
    notify('error', err.meesage);
    yield put(leaveFeedbackError());
    yield put(toggleModal('leaveFeedbackModal'));
  }
}

export default function* mainAreaSaga() {
  yield takeLatest(CONSTANTS.GET_FEEDBACK_LIST_REQUEST, getFeedbackList);
  yield takeLatest(CONSTANTS.LEAVE_FEEDBACK_REQUEST, leaveFeedback);
}
