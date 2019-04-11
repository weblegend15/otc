import * as CONSTANTS from './constants';

const initialState = {
  myProposals: {
    loading: false,
    list: [],
    total: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_MY_PROPOSALS_REQUEST:
      return {
        ...state,
        myProposals: {
          ...state.myProposals,
          loading: true,
        },
      };
    case CONSTANTS.GET_MY_PROPOSALS_SUCCESS:
      return {
        ...state,
        myProposals: {
          ...state.myProposals,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_MY_PROPOSALS_ERROR:
      return {
        ...state,
        myProposals: {
          ...state.myProposals,
          list: [],
          total: 0,
          loading: false,
        },
      };
    default:
      return state;
  }
};
