import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getProfileSuccess,
  getProfileError,
  joinGroupSuccess,
  joinGroupError,
  getMyOffersSuccess,
  getMyOffersError,
  updateProfileSuccess,
  updateProfileError,
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

function* getMyOffers(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
      filters: action.payload.filters,
    };
    const data = yield call(
      request,
      '/profile/offers',
      'GET',
      requestData,
      true,
    );

    yield put(getMyOffersSuccess(data));
  } catch (err) {
    yield put(getMyOffersError());
  }
}

function* updateProfile(action) {
  try {
    const requestData = action.payload;
    const data = yield call(request, '/profile', 'PUT', requestData, true);

    yield put(updateProfileSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(updateProfileError());
  }
}

export default function* userSaga() {
  yield takeLatest(CONSTANTS.GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(CONSTANTS.JOIN_GROUP_REQUEST, joinGroup);
  yield takeLatest(CONSTANTS.GET_MY_OFFERS_REQUEST, getMyOffers);
  yield takeLatest(CONSTANTS.UPDATE_PROFILE_REQUEST, updateProfile);
}
