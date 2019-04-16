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

// update group
export const updateGroupRequest = (groupId, data) => ({
  type: CONSTANTS.UPDATE_GROUP_REQUEST,
  payload: {
    groupId,
    data,
  },
});

export const updateGroupSuccess = data => ({
  type: CONSTANTS.UPDATE_GROUP_SUCCESS,
  payload: data,
});

export const updateGroupError = () => ({
  type: CONSTANTS.UPDATE_GROUP_ERROR,
});

// delete group
export const deleteGroupRequest = data => ({
  type: CONSTANTS.DELETE_GROUP_REQUEST,
  payload: data,
});

export const deleteGroupSuccess = groupId => ({
  type: CONSTANTS.DELETE_GROUP_SUCCESS,
  payload: groupId,
});

export const deleteGroupError = () => ({
  type: CONSTANTS.DELETE_GROUP_ERROR,
});

// approve group
export const approveGroupRequest = data => ({
  type: CONSTANTS.APPROVE_GROUP_REQUEST,
  payload: data,
});

export const approveGroupSuccess = groupId => ({
  type: CONSTANTS.APPROVE_GROUP_SUCCESS,
  payload: groupId,
});

export const approveGroupError = () => ({
  type: CONSTANTS.APPROVE_GROUP_ERROR,
});

// list group members
export const listMembersRequest = groupId => ({
  type: CONSTANTS.LIST_MEMBERS_REQUEST,
  payload: groupId,
});

export const listMembersSuccess = data => ({
  type: CONSTANTS.LIST_MEMBERS_SUCCESS,
  payload: data,
});

export const listMembersError = () => ({
  type: CONSTANTS.LIST_MEMBERS_ERROR,
});

// set notification actions
export const setNotifications = notifications => ({
  type: CONSTANTS.SET_NOTIFICATIONS,
  notifications,
});
