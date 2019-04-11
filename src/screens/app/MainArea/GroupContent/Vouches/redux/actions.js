import * as CONSTANTS from './constants';

// get vouches list by the offer
export const getVouchesRequest = data => ({
  type: CONSTANTS.GET_VOUCHES_REQUEST,
  payload: data,
});
export const getVouchesSuccess = data => ({
  type: CONSTANTS.GET_VOUCHES_SUCCESS,
  payload: data,
});
export const getVouchesError = () => ({
  type: CONSTANTS.GET_VOUCHES_ERROR,
});

// create vouch
export const createVouchRequest = data => ({
  type: CONSTANTS.CREATE_VOUCH_REQUEST,
  payload: data,
});
export const createVouchSuccess = data => ({
  type: CONSTANTS.CREATE_VOUCH_SUCCESS,
  payload: data,
});
export const createVouchError = () => ({
  type: CONSTANTS.CREATE_VOUCH_ERROR,
});

// delete vouch
export const deleteVouchRequest = data => ({
  type: CONSTANTS.DELETE_VOUCH_REQUEST,
  payload: data,
});
export const deleteVouchSuccess = data => ({
  type: CONSTANTS.DELETE_VOUCH_SUCCESS,
  payload: data,
});
export const deleteVouchError = () => ({
  type: CONSTANTS.DELETE_VOUCH_ERROR,
});

// accept vouch
export const acceptVouchRequest = data => ({
  type: CONSTANTS.ACCEPT_VOUCH_REQUEST,
  payload: data,
});
export const acceptVouchSuccess = () => ({
  type: CONSTANTS.ACCEPT_VOUCH_SUCCESS,
});
export const acceptVouchError = () => ({
  type: CONSTANTS.ACCEPT_VOUCH_ERROR,
});

// reject vouch
export const rejectVouchRequest = data => ({
  type: CONSTANTS.REJECT_VOUCH_REQUEST,
  payload: data,
});
export const rejectVouchSuccess = () => ({
  type: CONSTANTS.REJECT_VOUCH_SUCCESS,
});
export const rejectVouchError = () => ({
  type: CONSTANTS.REJECT_VOUCH_ERROR,
});
