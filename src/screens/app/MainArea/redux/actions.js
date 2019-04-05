import * as CONSTANTS from './constants';

export const getGroupMembersRequest = data => ({
  type: CONSTANTS.GET_GROUP_MEMBERS_REQUEST,
  payload: data,
});

export const getGroupMembersSuccess = data => ({
  type: CONSTANTS.GET_GROUP_MEMBERS_SUCCESS,
  payload: data,
});

export const getGroupMembersError = () => ({
  type: CONSTANTS.GET_GROUP_MEMBERS_ERROR,
});

export const getPermissionGroupsRequest = () => ({
  type: CONSTANTS.GET_PERMISSION_GROUPS_REQUEST,
});

export const getPermissionGroupsSuccess = data => ({
  type: CONSTANTS.GET_PERMISSION_GROUPS_SUCCESS,
  payload: data,
});

export const getPermissionGroupsError = () => ({
  type: CONSTANTS.GET_PERMISSION_GROUPS_ERROR,
});

export const readUserRequest = userId => ({
  type: CONSTANTS.READ_USER_REQUEST,
  payload: userId,
});
export const readUserSuccess = userData => ({
  type: CONSTANTS.READ_USER_SUCCESS,
  payload: userData,
});
export const readUserError = () => ({
  type: CONSTANTS.READ_USER_ERROR,
});

export const selectActiveGroup = groupId => ({
  type: CONSTANTS.SELECT_ACTIVE_GROUP,
  payload: groupId,
});

export const selectGroupMember = memberId => ({
  type: CONSTANTS.SELECT_GROUP_MEMBER,
  payload: memberId,
});
