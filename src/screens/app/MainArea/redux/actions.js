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

export const setResetMessages = () => ({
  type: CONSTANTS.SET_RESET_MESSAGES,
});

export const messageStore = data => ({
  type: CONSTANTS.MESSAGE_STORE,
  payload: data,
});

export const getMoreMessages = data => ({
  type: CONSTANTS.GET_MORE_MESSAGES,
  payload: data,
});

export const addNewMessage = data => ({
  type: CONSTANTS.ADD_NEW_MESSAGE,
  payload: data,
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

export const refreshFirebaseTokenRequest = () => ({
  type: CONSTANTS.REFRESH_FIREBASE_TOKEN_REQUEST,
});

export const refreshFirebaseTokenSuccess = firebaseToken => ({
  type: CONSTANTS.REFRESH_FIREBASE_TOKEN_SUCCESS,
  payload: firebaseToken,
});

export const refreshFirebaseTokenError = () => ({
  type: CONSTANTS.REFRESH_FIREBASE_TOKEN_ERROR,
});
