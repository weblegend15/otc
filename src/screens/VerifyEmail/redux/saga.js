import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { history } from '../../../configureStore';
import { VERIFY_EMAIL_REQUEST } from './constants';

import { verifyEmailSuccess, verifyEmailError } from './actions';
import request from '../../../utils/apiRequest';

function* verifyEmail(action) {
  try {
    const data = yield call(
      request,
      '/auth/verify-email',
      'POST',
      { token: action.payload },
      false,
    );

    yield put(verifyEmailSuccess(data));
    toast.success('You account is fully verified and ready to use!');
    history.push('/home');
  } catch (err) {
    toast.error(err.message);
    yield put(verifyEmailError());
  }
}

export default function* verifyEmailSaga() {
  yield takeLatest(VERIFY_EMAIL_REQUEST, verifyEmail);
}
