import * as CONSTANTS from './constants';

const initialState = {
  groupsList: {},
  groupsListLoading: false,
  profile: {},
  profileLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_GROUPS_REQUEST:
      return {
        ...state,
        groupsListLoading: true,
      };
    case CONSTANTS.GET_GROUPS_SUCCESS:
      return {
        ...state,
        groupsList: action.payload,
        groupsListLoading: false,
      };
    case CONSTANTS.GET_GROUPS_ERROR:
      return {
        ...state,
        groupsList: {},
        groupsListLoading: false,
      };
    case CONSTANTS.GET_PROFILE_REQUEST:
      return {
        ...state,
        profileLoading: true,
      };
    case CONSTANTS.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        profileLoading: false,
      };
    case CONSTANTS.GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {},
        profileLoading: false,
      };
    default:
      return state;
  }
};
