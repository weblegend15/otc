import * as CONSTANTS from './constants';

const initialState = {
  acceptApplicationLoading: false,
  rejectApplicationLoading: false,
  makeAdminLoading: false,
  banUserLoading: false,
  unbanUserLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ACCEPT_APPLICATION_REQUEST:
      return {
        ...state,
        acceptApplicationLoading: true,
      };
    case CONSTANTS.ACCEPT_APPLICATION_SUCCESS:
      return {
        ...state,
        acceptApplicationLoading: false,
      };
    case CONSTANTS.ACCEPT_APPLICATION_ERROR:
      return {
        ...state,
        acceptApplicationLoading: false,
      };

    case CONSTANTS.REJECT_APPLICATION_REQUEST:
      return {
        ...state,
        rejectApplicationLoading: true,
      };
    case CONSTANTS.REJECT_APPLICATION_SUCCESS:
      return {
        ...state,
        rejectApplicationLoading: false,
      };
    case CONSTANTS.REJECT_APPLICATION_ERROR:
      return {
        ...state,
        rejectApplicationLoading: false,
      };

    case CONSTANTS.MAKE_ADMIN_REQUEST:
      return {
        ...state,
        makeAdminLoading: true,
      };
    case CONSTANTS.MAKE_ADMIN_SUCCESS:
      return {
        ...state,
        makeAdminLoading: false,
      };
    case CONSTANTS.MAKE_ADMIN_ERROR:
      return {
        ...state,
        makeAdminLoading: false,
      };

    case CONSTANTS.BAN_USER_REQUEST:
      return {
        ...state,
        banUserLoading: true,
      };
    case CONSTANTS.BAN_USER_SUCCESS:
      return {
        ...state,
        banUserLoading: false,
      };
    case CONSTANTS.BAN_USER_ERROR:
      return {
        ...state,
        banUserLoading: false,
      };

    case CONSTANTS.UNBAN_USER_REQUEST:
      return {
        ...state,
        unbanUserLoading: true,
      };
    case CONSTANTS.UNBAN_USER_SUCCESS:
      return {
        ...state,
        unbanUserLoading: false,
      };
    case CONSTANTS.UNBAN_USER_ERROR:
      return {
        ...state,
        unbanUserLoading: false,
      };
    default:
      return state;
  }
};
