import * as CONSTANTS from './constants';

export const getFeedbackListRequest = data => ({
  type: CONSTANTS.GET_FEEDBACK_LIST_REQUEST,
  payload: data,
});

export const getFeedbackListSuccess = data => ({
  type: CONSTANTS.GET_FEEDBACK_LIST_SUCCESS,
  payload: data,
});

export const getFeedbackListError = () => ({
  type: CONSTANTS.GET_FEEDBACK_LIST_ERROR,
});
