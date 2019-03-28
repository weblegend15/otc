import * as CONSTANTS from './constants';

export const getProfileRequest = () => ({
  type: CONSTANTS.GET_PROFILE_REQUEST,
});

export const getProfileSuccess = profile => ({
  type: CONSTANTS.GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileError = () => ({
  type: CONSTANTS.GET_PROFILE_ERROR,
});
