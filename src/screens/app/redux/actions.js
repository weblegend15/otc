import * as CONSTANTS from './constants';

// get groups list actions
export const getGroupsRequest = data => ({
  type: CONSTANTS.GET_GROUPS_REQUEST,
  payload: data,
});

export const getGroupsSuccess = data => ({
  type: CONSTANTS.GET_GROUPS_SUCCESS,
  payload: data,
});

export const getGroupsError = () => ({
  type: CONSTANTS.GET_GROUPS_ERROR,
});

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
