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

export const getMyOffersRequest = data => ({
  type: CONSTANTS.GET_MY_OFFERS_REQUEST,
  payload: data,
});
export const getMyOffersSuccess = data => ({
  type: CONSTANTS.GET_MY_OFFERS_SUCCESS,
  payload: data,
});
export const getMyOffersError = () => ({
  type: CONSTANTS.GET_MY_OFFERS_ERROR,
});

export const deleteMyOffer = data => ({
  type: CONSTANTS.DELETE_MY_OFFER,
  payload: data,
});

// udpate user profile
export const updateProfileRequest = data => ({
  type: CONSTANTS.UPDATE_PROFILE_REQUEST,
  payload: data,
});
export const updateProfileSuccess = data => ({
  type: CONSTANTS.UPDATE_PROFILE_SUCCESS,
  payload: data,
});
export const updateProfileError = () => ({
  type: CONSTANTS.UPDATE_PROFILE_ERROR,
});
