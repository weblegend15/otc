import * as CONSTANTS from './constants';

const initialState = {
  members: {
    loading: false,
    list: [],
    total: 0,
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
    default:
      return state;
  }
};
