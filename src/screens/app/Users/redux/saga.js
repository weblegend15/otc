import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getProfileSuccess,
  getProfileError,
  joinGroupSuccess,
  joinGroupError,
} from './actions';

import toggleModal from '../../../../modals/redux/actions';

import request from '../../../../utils/apiRequest';
import notify from '../../../../utils/notify';

function* getProfile() {
  try {
    const profile = yield call(request, '/profile', 'GET', null, true);

    yield put(getProfileSuccess(profile));
  } catch (err) {
    notify('error', err.message);
    yield put(getProfileError());
  }
}

function* joinGroup(action) {
  try {
    const { groupId } = action;

    // TODO questions/answers list
    // const requestData = {
    //   answerOne: action.payload.answerOne,
    //   answerTwo: action.payload.answerTwo,
    //   answerThree: action.payload.answerThree,
    // };

    const data = yield call(
      request,
      `/profile/permissions/${groupId}/apply`,
      'PUT',
      {},
      true,
    );

    yield put(joinGroupSuccess(data));
    yield put(toggleModal('newGroupModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(toggleModal('newGroupModal'));
    yield put(joinGroupError());
  }
}

export default function* userSaga() {
  yield takeLatest(CONSTANTS.GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(CONSTANTS.JOIN_GROUP_REQUEST, joinGroup);
}
