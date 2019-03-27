import * as CONSTANTS from './constants';

const initialState = {
  groupsList: {},
  groupsListLoading: false,
  profile: {},
  profileLoading: false,
  groupData: {},
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

    case CONSTANTS.CREATE_GROUP_REQUEST:
      return {
        ...state,
        groupsListLoading: true,
      };
    case CONSTANTS.CREATE_GROUP_SUCCESS:
      return {
        ...state,
        groupsListLoading: false,
        groupsList: {
          ...state.groupsList,
          data: !state.groupsList.data
            ? [action.payload]
            : [action.payload, ...state.groupsList.data],
        },
      };
    case CONSTANTS.CREATE_GROUP_ERROR:
      return {
        ...state,
        groupsListLoading: false,
      };

    case CONSTANTS.READ_GROUP_REQUEST:
      return {
        ...state,
        groupsListLoading: true,
      };
    case CONSTANTS.READ_GROUP_SUCCESS:
      return {
        ...state,
        groupData: action.payload,
        groupsListLoading: false,
      };
    case CONSTANTS.READ_GROUP_ERROR:
      return {
        ...state,
        groupData: {},
        groupsListLoading: false,
      };

    default:
      return state;
  }
};
