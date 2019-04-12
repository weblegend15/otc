import * as CONSTANTS from './constants';

const initialState = {
  profile: {
    data: {},
    loading: false,
  },

  myOffers: {
    list: [],
    total: 0,
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

    case CONSTANTS.GET_MY_OFFERS_REQUEST:
      return {
        ...state,
        myOffers: {
          ...state.myOffers,
          loading: true,
        },
      };
    case CONSTANTS.GET_MY_OFFERS_SUCCESS:
      return {
        ...state,
        myOffers: {
          ...state.myOffers,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_MY_OFFERS_ERROR:
      return {
        ...state,
        myOffers: {
          ...state.myOffers,
          list: [],
          total: 0,
          loading: false,
        },
      };

    case CONSTANTS.DELETE_MY_OFFER:
      return {
        ...state,
        myOffers: {
          ...state.myOffers,
          list: state.myOffers.list.filter(
            offer => offer._id !== action.payload,
          ),
          total: state.myOffers.total - 1,
        },
      };
    default:
      return state;
  }
};
