import * as CONSTANTS from './constants';

const initialState = {
  groupOffers: {
    loading: false,
    list: [],
    total: 0,
  },

  groupOffer: {
    data: {},
    loading: false,
  },
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_OFFERS_REQUEST:
      return {
        ...state,
        groupOffers: {
          ...state.groupOffers,
          loading: true,
        },
      };
    case CONSTANTS.GET_OFFERS_SUCCESS:
      return {
        ...state,
        groupOffers: {
          ...state.groupOffers,
          list: action.payload.list,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_OFFERS_ERROR:
      return {
        ...state,
        groupOffers: {
          ...state.groupOffers,
          list: [],
          total: 0,
          loading: false,
        },
      };

    case CONSTANTS.CREATE_OFFER_REQUEST:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          loading: true,
        },
      };
    case CONSTANTS.CREATE_OFFER_SUCCESS:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.CREATE_OFFER_ERROR:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.UPDATE_OFFER_REQUEST:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          loading: true,
        },
      };
    case CONSTANTS.UPDATE_OFFER_SUCCESS:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.UPDATE_OFFER_ERROR:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.READ_OFFER_REQUEST:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          loading: true,
        },
      };
    case CONSTANTS.READ_OFFER_SUCCESS:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.READ_OFFER_ERROR:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.DELETE_OFFER_REQUEST:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          loading: true,
        },
      };
    case CONSTANTS.DELETE_OFFER_SUCCESS:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.DELETE_OFFER_ERROR:
      return {
        ...state,
        groupOffer: {
          ...state.groupOffer,
          data: {},
          loading: false,
        },
      };

    default:
      return state;
  }
};
