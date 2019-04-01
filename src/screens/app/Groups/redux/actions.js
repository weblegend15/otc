import * as CONSTANTS from './constants';

// GET groups list
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

// CREATE group
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

// READ group
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

// delete group
export const deleteGroupRequest = data => ({
  type: CONSTANTS.DELETE_GROUP_REQUEST,
  payload: data,
});

export const deleteGroupSuccess = () => ({
  type: CONSTANTS.DELETE_GROUP_SUCCESS,
});

export const deleteGroupError = () => ({
  type: CONSTANTS.DELETE_GROUP_ERROR,
});

// approve group
export const approveGroupRequest = data => ({
  type: CONSTANTS.APPROVE_GROUP_REQUEST,
  payload: data,
});

export const approveGroupSuccess = () => ({
  type: CONSTANTS.APPROVE_GROUP_SUCCESS,
});

export const approveGroupError = () => ({
  type: CONSTANTS.APPROVE_GROUP_ERROR,
});
