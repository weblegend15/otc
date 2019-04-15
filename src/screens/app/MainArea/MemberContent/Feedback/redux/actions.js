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

export const leaveFeedbackRequest = data => ({
  type: CONSTANTS.LEAVE_FEEDBACK_REQUEST,
  payload: data,
});
export const leaveFeedbackSuccess = data => ({
  type: CONSTANTS.LEAVE_FEEDBACK_SUCCESS,
  payload: data,
});
export const leaveFeedbackError = () => ({
  type: CONSTANTS.LEAVE_FEEDBACK_ERROR,
});
