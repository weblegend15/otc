import * as CONSTANTS from './constants';

// send message channel
export const sendMessageRequest = (message, groupId, chatId) => ({
  type: CONSTANTS.SEND_MESSAGE_REQUEST,
  message,
  groupId,
  chatId,
});

export const sendMessageSuccess = data => ({
  type: CONSTANTS.SEND_MESSAGE_SUCCESS,
  payload: data,
});

export const sendMessageError = () => ({
  type: CONSTANTS.SEND_MESSAGE_ERROR,
});

export const setResetMessages = () => ({
  type: CONSTANTS.SET_RESET_MESSAGES,
});

export const messageStore = data => ({
  type: CONSTANTS.MESSAGE_STORE,
  payload: data,
});

export const addNewMessage = data => ({
  type: CONSTANTS.ADD_NEW_MESSAGE,
  payload: data,
});

export const getMoreMessages = data => ({
  type: CONSTANTS.GET_MORE_MESSAGES,
  payload: data,
});

export const sendFileMessageReqeust = (
  groupId,
  chatId,
  text,
  file,
  fileName,
) => ({
  type: CONSTANTS.SEND_FILE_MESSAGE_REQUEST,
  groupId,
  chatId,
  text,
  file,
  fileName,
});

export const sendFileMessageError = error => ({
  type: CONSTANTS.SEND_FILE_MESSAGE_ERROR,
  error,
});

export const getNewOffer = data => ({
  type: CONSTANTS.GET_NEW_OFFER,
  payload: data,
});
