import * as CONSTANTS from './constants';

const initialState = {
  vouches: {
    loading: false,
    list: [],
    total: 0,
  },

  vouch: {
    loading: false,
    data: {},
  },

  handleVouchLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_VOUCHES_REQUEST:
      return {
        ...state,
        vouches: {
          ...state.vouches,
          loading: true,
        },
      };
    case CONSTANTS.GET_VOUCHES_SUCCESS:
      return {
        ...state,
        vouches: {
          ...state.vouches,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_VOUCHES_ERROR:
      return {
        ...state,
        vouches: {
          ...state.vouches,
          list: [],
          total: 0,
          loading: false,
        },
      };

    case CONSTANTS.CREATE_VOUCH_REQUEST:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          loading: true,
        },
      };
    case CONSTANTS.CREATE_VOUCH_SUCCESS:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          data: action.payload,
          loading: false,
        },
        vouches: {
          ...state.vouches,
          list: [action.payload, ...state.vouches.list],
        },
      };
    case CONSTANTS.CREATE_VOUCH_ERROR:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.DELETE_VOUCH_REQUEST:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          loading: true,
        },
      };
    case CONSTANTS.DELETE_VOUCH_SUCCESS:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.DELETE_VOUCH_ERROR:
      return {
        ...state,
        vouch: {
          ...state.vouch,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.ACCEPT_VOUCH_REQUEST:
      return {
        ...state,
        handleVouchLoading: true,
      };
    case CONSTANTS.ACCEPT_VOUCH_SUCCESS:
      return {
        ...state,
        handleVouchLoading: false,
      };
    case CONSTANTS.ACCEPT_VOUCH_ERROR:
      return {
        ...state,
        handleVouchLoading: false,
      };

    case CONSTANTS.REJECT_VOUCH_REQUEST:
      return {
        ...state,
        handleVouchLoading: true,
      };
    case CONSTANTS.REJECT_VOUCH_SUCCESS:
      return {
        ...state,
        handleVouchLoading: false,
      };
    case CONSTANTS.REJECT_VOUCH_ERROR:
      return {
        ...state,
        handleVouchLoading: false,
      };

    default:
      return state;
  }
};
