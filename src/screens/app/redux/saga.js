import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GET_GROUPS_REQUEST } from './constants';

import { getGroupsSuccess, getGroupsError } from './actions';

import request from '../../../utils/apiRequest';

function* getGroups(action) {
  try {
    const requestData = {
      skip: action.payload.skip,
      limit: action.payload.limit,
    };

    const data = yield call(request, '/groups', 'GET', requestData, true);

    yield put(getGroupsSuccess(data));
  } catch (err) {
    toast.error(err.message);
    yield put(getGroupsError());
  }
}

export default function* appSaga() {
  yield takeLatest(GET_GROUPS_REQUEST, getGroups);
}
