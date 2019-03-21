import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { history } from '../../../configureStore';
import { SIGNUP_REQUEST } from './constants';

import { signupError, signupSuccess } from './actions';
import { sendConfirmRequest } from '../../SendConfirm/redux/actions';
import request from '../../../utils/apiRequest';

function* signup(action) {
  try {
    const data = yield call(
      request,
      '/auth/signup',
      'POST',
      action.data,
      false,
    );

    yield put(signupSuccess(data));
    yield put(sendConfirmRequest(action.data.email));
    history.push('/send-confirm');
  } catch (err) {
    toast.error(err.message);
    yield put(signupError());
  }
}

export default function* signupSaga() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}
