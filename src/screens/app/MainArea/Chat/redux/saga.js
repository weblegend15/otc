import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../../utils/notify';
import * as CONSTANTS from './constants';

import { sendMessageSuccess, sendMessageError } from './actions';
import request from '../../../../../utils/apiRequest';

function* sendMessage(action) {
  try {
    const requestData = {
      text: action.message,
    };
    const responseData = yield call(
      request,
      `/groups/${action.groupId}/chats/${action.chatId}/messages`,
      'POST',
      requestData,
      true,
    );
    yield put(sendMessageSuccess(responseData));
  } catch (err) {
    notify('error', err.meesage);
    yield put(sendMessageError());
  }
}

export default function* chatSaga() {
  yield takeLatest(CONSTANTS.SEND_MESSAGE_REQUEST, sendMessage);
}
