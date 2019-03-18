import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_DATA } from '../../constants';
import { setData } from '../../actions';
import request from '../../../utils/apiRequest';

function* getDataSaga() {
  try {
    const data = yield call(request, '/data', 'GET', null, true);
    yield put(setData(data));
  } catch (err) {
    // yield(getDataError())
  }
}

export default function* watchGetDataSaga() {
  yield takeLatest(GET_DATA, getDataSaga);
}