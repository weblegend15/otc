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

// create group action
export const createGroupRequest = data => ({
  type: CONSTANTS.CREATE_GROUP_REQUEST,
  payload: data,
});

export const createGroupSuccess = data => ({
  type: CONSTANTS.CREATE_GROUP_SUCCESS,
  payload: data,
});

export const createGroupError = () => ({
  type: CONSTANTS.CREATE_GROUP_ERROR,
});

// read group action
export const readGroupRequest = data => ({
  type: CONSTANTS.READ_GROUP_REQUEST,
  payload: data,
});

export const readGroupSuccess = data => ({
  type: CONSTANTS.READ_GROUP_SUCCESS,
  payload: data,
});

export const readGroupError = () => ({
  type: CONSTANTS.READ_GROUP_ERROR,
});
