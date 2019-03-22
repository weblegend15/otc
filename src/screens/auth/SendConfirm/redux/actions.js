import {
  SEND_CONFIRM_REQUEST,
  SEND_CONFIRM_SUCCESS,
  SEND_CONFIRM_ERROR,
} from './constants';

// email sendConfirm
export const sendConfirmRequest = email => ({
  type: SEND_CONFIRM_REQUEST,
  payload: email,
});

export const sendConfirmSuccess = data => ({
  type: SEND_CONFIRM_SUCCESS,
  payload: data,
});

export const sendConfirmError = () => ({
  type: SEND_CONFIRM_ERROR,
});
