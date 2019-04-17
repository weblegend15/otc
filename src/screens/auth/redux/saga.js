import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

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
  forgotPasswordSuccess,
  forgotPasswordError,
  confirmPasswordError,
  generateTwoFASuccess,
  generateTwoFAError,
  confirmTwoFASuccess,
  confirmTwoFAError,
} from './actions';

import { history } from '../../../configureStore';
import request from '../../../utils/apiRequest';
import notify from '../../../utils/notify';

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
    notify('error', err.message);
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
    history.push('/app/home');
  } catch (err) {
    notify('error', err.message);
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
    notify('error', err.message);
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
    notify('success', 'You account is fully verified and ready to use!');
  } catch (err) {
    notify('error', err.message);
    yield put(verifyEmailError());
  }
}

function* forgotPassword(action) {
  try {
    const requestData = {
      email: action.email,
    };

    yield call(
      request,
      '/auth/request-reset-password',
      'POST',
      requestData,
      false,
    );
    yield put(forgotPasswordSuccess(action.email));
  } catch (err) {
    yield put(forgotPasswordError(err));
  }
}

function* confirmPassword(action) {
  try {
    const requestData = {
      email: action.email,
      password: action.password,
      token: action.token,
    };
    yield call(request, '/auth/reset-password', 'POST', requestData, false);
    history.push('/auth/signin');
  } catch (err) {
    yield put(confirmPasswordError(err));
  }
}

function* generateTwoFA() {
  try {
    const data = yield call(request, '/auth/generate-2fa', 'GET', null, false);
    yield put(generateTwoFASuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(generateTwoFAError());
  }
}

function* confirmTwoFA(action) {
  try {
    const requestData = {
      token: action.payload,
    };
    const data = yield call(request, '/profile/2fa', 'PUT', requestData, false);
    yield put(confirmTwoFASuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(confirmTwoFAError());
  }
}

export default function* authSaga() {
  yield takeLatest(CONSTANTS.SIGNUP_REQUEST, signup);
  yield takeLatest(CONSTANTS.SIGNIN_REQUEST, signin);
  yield takeLatest(CONSTANTS.SEND_CONFIRM_REQUEST, sendConfirm);
  yield takeLatest(CONSTANTS.VERIFY_EMAIL_REQUEST, verifyEmail);
  yield takeLatest(CONSTANTS.FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(CONSTANTS.CONFIRM_PASSWORD_REQUEST, confirmPassword);
  yield takeLatest(CONSTANTS.GENERATE_TWO_FA_REQUEST, generateTwoFA);
  yield takeLatest(CONSTANTS.CONFIRM_TWO_FA_REQUEST, confirmTwoFA);
}
