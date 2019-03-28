import * as CONSTANTS from './constants';

const initialState = {
  user: {
    data: {},
    loading: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_PROFILE_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case CONSTANTS.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.GET_PROFILE_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          data: {},
          loading: false,
        },
      };

    default:
      return state;
  }
};
