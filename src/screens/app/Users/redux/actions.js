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

export const joinGroupRequest = (data, groupId) => ({
  type: CONSTANTS.JOIN_GROUP_REQUEST,
  payload: data,
  groupId,
});

export const joinGroupSuccess = data => ({
  type: CONSTANTS.JOIN_GROUP_SUCCESS,
  payload: data,
});

export const joinGroupError = () => ({
  type: CONSTANTS.JOIN_GROUP_ERROR,
});