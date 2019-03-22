import { all, fork } from 'redux-saga/effects';

import signinSaga from '../Signin/redux/saga';
import signupSaga from '../Signup/redux/saga';
import sendConfirmSaga from '../SendConfirm/redux/saga';
import verifyEmailSaga from '../VerifyEmail/redux/saga';

export default function* authSaga() {
  yield all([
    fork(signinSaga),
    fork(signupSaga),
    fork(sendConfirmSaga),
    fork(verifyEmailSaga),
  ]);
}
