import { put, takeLatest, call } from 'redux-saga/effects';
import notify from '../../../../../utils/notify';
import * as CONSTANTS from './constants';

import {
  sendMessageSuccess,
  sendMessageError,
  sendFileMessageError,
} from './actions';
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
    notify('error', err.message);
    yield put(sendMessageError());
  }
}

function* sendFileMessage(action) {
  try {
    const { file, groupId, chatId, text, fileName } = action;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', text);
    formData.append('filename', fileName);

    yield call(
      request,
      `/groups/${groupId}/chats/${chatId}/messages/file`,
      'POST',
      formData,
      true,
      null,
      true,
    );
  } catch (err) {
    notify('error', err.message);
    yield put(sendFileMessageError(err));
  }
}

export default function* chatSaga() {
  yield takeLatest(CONSTANTS.SEND_MESSAGE_REQUEST, sendMessage);
  yield takeLatest(CONSTANTS.SEND_FILE_MESSAGE_REQUEST, sendFileMessage);
}
