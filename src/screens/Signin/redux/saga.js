// /* eslint-disable */
import { put, takeLatest, call } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import { history } from '../../../configureStore';
import { SIGNIN_REQUEST } from './constants';

import { signinError, signinSuccess } from './actions';
import request from '../../../utils/apiRequest';

function* signin(action) {
  try {
    const requestData = {
      email: action.email,
      password: action.password,
    };
    // const data = yield call(request, '/auth/signin', 'POST', requestData);
    const data = {
      ...requestData,
      isAuthenticated: true,
    };

    // toast.success("Login success!");
    yield put(signinSuccess(data));
    history.push('/home');
  } catch (err) {
    // toast.error("Login error!");
    yield put(signinError());
  }
}

export default function* signinSaga() {
  yield takeLatest(SIGNIN_REQUEST, signin);
}