import * as CONSTANTS from './constants';

export const getMyVouchesRequest = data => ({
  type: CONSTANTS.GET_MY_VOUCHES_REQUEST,
  payload: data,
});
export const getMyVouchesSuccess = data => ({
  type: CONSTANTS.GET_MY_VOUCHES_SUCCESS,
  payload: data,
});
export const getMyVouchesError = () => ({
  type: CONSTANTS.GET_MY_VOUCHES_ERROR,
});

export const acceptVouchRequest = data => ({
  type: CONSTANTS.ACCEPT_VOUCH_REQUEST,
  payload: data,
});
export const acceptVouchSuccess = data => ({
  type: CONSTANTS.ACCEPT_VOUCH_SUCCESS,
  payload: data,
});
export const acceptVouchError = () => ({
  type: CONSTANTS.ACCEPT_VOUCH_ERROR,
});

export const rejectVouchRequest = data => ({
  type: CONSTANTS.REJECT_VOUCH_REQUEST,
  payload: data,
});
export const rejectVouchSuccess = data => ({
  type: CONSTANTS.REJECT_VOUCH_SUCCESS,
  payload: data,
});
export const rejectVouchError = () => ({
  type: CONSTANTS.REJECT_VOUCH_ERROR,
});
