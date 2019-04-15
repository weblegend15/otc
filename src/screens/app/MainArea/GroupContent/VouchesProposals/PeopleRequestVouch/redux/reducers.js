import * as CONSTANTS from './constants';

const initialState = {
  myVouches: {
    loading: false,
    list: [],
    total: 0,
  },

  acceptVouchLoading: false,
  rejectVouchLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_MY_VOUCHES_REQUEST:
      return {
        ...state,
        myVouches: {
          ...state.myVouches,
          loading: true,
        },
      };
    case CONSTANTS.GET_MY_VOUCHES_SUCCESS:
      return {
        ...state,
        myVouches: {
          ...state.myVouches,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_MY_VOUCHES_ERROR:
      return {
        ...state,
        myVouches: {
          ...state.myVouches,
          list: [],
          total: 0,
          loading: false,
        },
      };

    case CONSTANTS.ACCEPT_VOUCH_REQUEST:
      return {
        ...state,
        acceptVouchLoading: true,
      };
    case CONSTANTS.ACCEPT_VOUCH_SUCCESS:
      return {
        ...state,
        acceptVouchLoading: false,
      };
    case CONSTANTS.ACCEPT_VOUCH_ERROR:
      return {
        ...state,
        acceptVouchLoading: false,
      };

    case CONSTANTS.REJECT_VOUCH_REQUEST:
      return {
        ...state,
        rejectVouchLoading: true,
      };
    case CONSTANTS.REJECT_VOUCH_SUCCESS:
      return {
        ...state,
        rejectVouchLoading: false,
      };
    case CONSTANTS.REJECT_VOUCH_ERROR:
      return {
        ...state,
        rejectVouchLoading: false,
      };
    default:
      return state;
  }
};
