import * as CONSTANTS from './constants';

// accept application as member
export const acceptApplicationRequest = (userId, groupId) => ({
  type: CONSTANTS.ACCEPT_APPLICATION_REQUEST,
  payload: {
    userId,
    groupId,
  },
});
export const acceptApplicationSuccess = () => ({
  type: CONSTANTS.ACCEPT_APPLICATION_SUCCESS,
});
export const acceptApplicationError = () => ({
  type: CONSTANTS.ACCEPT_APPLICATION_ERROR,
});

// reject application
export const rejectApplicationRequest = (userId, groupId) => ({
  type: CONSTANTS.REJECT_APPLICATION_REQUEST,
  payload: {
    userId,
    groupId,
  },
});
export const rejectApplicationSuccess = () => ({
  type: CONSTANTS.REJECT_APPLICATION_SUCCESS,
});
export const rejectApplicationError = () => ({
  type: CONSTANTS.REJECT_APPLICATION_ERROR,
});

// make admin
export const makeAdminRequest = (userId, groupId) => ({
  type: CONSTANTS.MAKE_ADMIN_REQUEST,
  payload: {
    userId,
    groupId,
  },
});
export const makeAdminSuccess = () => ({
  type: CONSTANTS.MAKE_ADMIN_SUCCESS,
});
export const makeAdminError = () => ({
  type: CONSTANTS.MAKE_ADMIN_ERROR,
});

// ban user
export const banUserRequest = (userId, groupId) => ({
  type: CONSTANTS.BAN_USER_REQUEST,
  payload: {
    userId,
    groupId,
  },
});
export const banUserSuccess = () => ({
  type: CONSTANTS.BAN_USER_SUCCESS,
});
export const banUserError = () => ({
  type: CONSTANTS.BAN_USER_ERROR,
});

// unban user
export const unbanUserRequest = (userId, groupId) => ({
  type: CONSTANTS.UNBAN_USER_REQUEST,
  payload: {
    userId,
    groupId,
  },
});
export const unbanUserSuccess = () => ({
  type: CONSTANTS.UNBAN_USER_SUCCESS,
});
export const unbanUserError = () => ({
  type: CONSTANTS.UNBAN_USER_ERROR,
});
