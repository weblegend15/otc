import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SEND_CONFIRM_REQUEST } from './constants';

import { sendConfirmSuccess, sendConfirmError } from './actions';
import request from '../../../../utils/apiRequest';

function* sendConfirm(action) {
  try {
    const data = yield call(
      request,
      '/auth/send-verification-email',
      'POST',
      { email: action.payload },
      false,
    );

    yield put(sendConfirmSuccess(data));
  } catch (err) {
    toast.error(err.message);
    yield put(sendConfirmError());
  }
}

export default function* sendConfirmSaga() {
  yield takeLatest(SEND_CONFIRM_REQUEST, sendConfirm);
}
