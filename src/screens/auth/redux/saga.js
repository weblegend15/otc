import { put, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  SIGNUP_REQUEST,
  SIGNIN_REQUEST,
  SEND_CONFIRM_REQUEST,
  VERIFY_EMAIL_REQUEST,
} from './constants';

import {
  signupError,
  signupSuccess,
  signinError,
  signinSuccess,
  sendConfirmRequest,
  sendConfirmSuccess,
  sendConfirmError,
  verifyEmailSuccess,
  verifyEmailError,
} from './actions';

import { history } from '../../../configureStore';
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
    history.push('/auth/send-confirm');
  } catch (err) {
    toast.error(err.message);
    yield put(signupError());
  }
}

function* signin(action) {
  try {
    const requestData = {
      email: action.email,
      password: action.password,
    };

    const data = yield call(request, '/auth/login', 'POST', requestData, false);

    yield put(signinSuccess(data));
    history.push('/dashboard');
  } catch (err) {
    toast.error(err.message);
    yield put(signinError());
  }
}

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
  } catch (err) {
    toast.error(err.message);
    yield put(verifyEmailError());
  }
}

export default function* authSaga() {
  yield takeLatest(SIGNUP_REQUEST, signup);
  yield takeLatest(SIGNIN_REQUEST, signin);
  yield takeLatest(SEND_CONFIRM_REQUEST, sendConfirm);
  yield takeLatest(VERIFY_EMAIL_REQUEST, verifyEmail);
}
