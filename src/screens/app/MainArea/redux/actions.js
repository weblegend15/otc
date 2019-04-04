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

// create private channel
export const createPrivateChatRequest = (id, groupId) => ({
  type: CONSTANTS.CREATE_PRIVATE_CHAT_REQUEST,
  id,
  groupId,
});

export const createPrivateChatSuccess = data => ({
  type: CONSTANTS.CREATE_PRIVATE_CHAT_SUCCESS,
  payload: data,
});

export const createPrivateChatError = () => ({
  type: CONSTANTS.CREATE_PRIVATE_CHAT_ERROR,
});

// send message channel
export const sendMessageRequest = (message, groupId, chatId) => ({
  type: CONSTANTS.SEND_MESSAGE_REQUEST,
  message,
  groupId,
  chatId,
});

export const sendMessageSuccess = data => ({
  type: CONSTANTS.SEND_MESSAGE_SUCCESS,
  payload: data,
});

export const sendMessageError = () => ({
  type: CONSTANTS.SEND_MESSAGE_ERROR,
});
