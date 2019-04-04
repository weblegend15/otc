import * as CONSTANTS from './constants';

const initialState = {
  members: {
    loading: false,
    list: [],
    total: 0,
  },
  myGroups: {
    loading: false,
    list: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_GROUP_MEMBERS_REQUEST:
      return {
        ...state,
        members: {
          ...state.members,
          loading: true,
        },
      };
    case CONSTANTS.GET_GROUP_MEMBERS_SUCCESS:
      return {
        members: {
          ...state.members,
          loading: false,
          list: action.payload.data,
          total: action.payload.total,
        },
      };
    case CONSTANTS.GET_GROUP_MEMBERS_ERROR:
      return {
        ...state,
        members: {
          ...state.members,
          loading: false,
          list: [],
          total: 0,
        },
      };
    case CONSTANTS.GET_PERMISSION_GROUPS_REQUEST:
      return {
        ...state,
        myGroups: {
          ...state.myGroups,
          loading: true,
        },
      };
    case CONSTANTS.GET_PERMISSION_GROUPS_SUCCESS:
      return {
        ...state,
        myGroups: {
          ...state.myGroups,
          loading: false,
          list: action.payload,
        },
      };
    case CONSTANTS.GET_PERMISSION_GROUPS_ERROR:
      return {
        myGroups: {
          ...state.myGroups,
          loading: false,
          list: [],
        },
      };
    default:
      return state;
  }
};
