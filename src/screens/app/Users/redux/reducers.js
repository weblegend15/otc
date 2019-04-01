import * as CONSTANTS from './constants';

const initialState = {
  profile: {
    data: {},
    loading: false,
  },

  joinRequestLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_PROFILE_REQUEST:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
        },
      };
    case CONSTANTS.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.JOIN_GROUP_REQUEST:
      return {
        ...state,
        joinRequestLoading: true,
      };
    case CONSTANTS.JOIN_GROUP_SUCCESS:
      return {
        ...state,
        joinRequestLoading: false,
      };
    case CONSTANTS.JOIN_GROUP_ERROR:
      return {
        ...state,
        joinRequestLoading: false,
      };
    default:
      return state;
  }
};
