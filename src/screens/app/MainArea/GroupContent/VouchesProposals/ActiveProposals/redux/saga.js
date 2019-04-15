import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import { getMyProposalsSuccess, getMyProposalsError } from './actions';

import request from '../../../../../../../utils/apiRequest';
import notify from '../../../../../../../utils/notify';

function* getMyProposals(action) {
  try {
    const { groupId } = action.payload;
    const requestData = {
      limit: action.payload.limit,
      skip: action.payload.skip,
      filters: action.payload.filters,
    };

    const data = yield call(
      request,
      `/profile/my-groups/${groupId}/proposals`,
      'GET',
      requestData,
      true,
    );

    yield put(getMyProposalsSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(getMyProposalsError());
  }
}

export default function* myGroupProposalsSaga() {
  yield takeLatest(CONSTANTS.GET_MY_PROPOSALS_REQUEST, getMyProposals);
}
