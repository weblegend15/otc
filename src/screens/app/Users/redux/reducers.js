import * as CONSTANTS from './constants';

const initialState = {
  profile: {
    data: {},
    loading: false,
  },
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

    default:
      return state;
  }
};
