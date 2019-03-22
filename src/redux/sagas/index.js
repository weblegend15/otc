import { all, fork } from 'redux-saga/effects';

import signinSaga from '../../screens/Signin/redux/saga';
import signupSaga from '../../screens/Signup/redux/saga';
import confirmSaga from '../../screens/Confirm/redux/saga';
import verifyEmailSaga from '../../screens/VerifyEmail/redux/saga';

export default function* root() {
  yield all([
    fork(signinSaga),
    fork(signupSaga),
    fork(confirmSaga),
    fork(verifyEmailSaga),
  ]);
}
