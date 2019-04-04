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
  privateChannel: {
    loading: false,
    channel: [],
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
        ...state,
        myGroups: {
          ...state.myGroups,
          loading: false,
          list: [],
        },
      };
    case CONSTANTS.CREATE_PRIVATE_CHAT_REQUEST:
      return {
        ...state,
        privateChannel: {
          ...state.privateChannel,
          loading: true,
        },
      };
    case CONSTANTS.CREATE_PRIVATE_CHAT_SUCCESS:
      return {
        ...state,
        privateChannel: {
          ...state.privateChannel,
          loading: false,
          channel: action.payload,
        },
      };
    case CONSTANTS.CREATE_PRIVATE_CHAT_ERROR:
      return {
        ...state,
        privateChannel: {
          ...state.privateChannel,
          loading: false,
          channel: [],
        },
      };
    default:
      return state;
  }
};
