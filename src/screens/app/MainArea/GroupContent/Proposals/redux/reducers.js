import * as CONSTANTS from './constants';

const initialState = {
  proposals: {
    loading: false,
    list: [],
    total: 0,
  },

  proposal: {
    data: {},
    loading: false,
  },

  acceptProposalLoading: false,
  rejectProposalLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_PROPOSALS_REQUEST:
      return {
        ...state,
        proposals: {
          ...state.proposals,
          loading: true,
        },
      };
    case CONSTANTS.GET_PROPOSALS_SUCCESS:
      return {
        ...state,
        proposals: {
          ...state.proposals,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_PROPOSALS_ERROR:
      return {
        ...state,
        proposals: {
          ...state.proposals,
          list: [],
          total: 0,
          loading: false,
        },
      };

    case CONSTANTS.CREATE_PROPOSAL_REQUEST:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          loading: true,
        },
      };
    case CONSTANTS.CREATE_PROPOSAL_SUCCESS:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.CREATE_PROPOSAL_ERROR:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.UPDATE_PROPOSAL_REQUEST:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          loading: true,
        },
      };
    case CONSTANTS.UPDATE_PROPOSAL_SUCCESS:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.UPDATE_PROPOSAL_ERROR:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.DELETE_PROPOSAL_REQUEST:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          loading: true,
        },
      };
    case CONSTANTS.DELETE_PROPOSAL_SUCCESS:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.DELETE_PROPOSAL_ERROR:
      return {
        ...state,
        proposal: {
          ...state.proposal,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.ACCEPT_PROPOSAL_REQUEST:
      return {
        ...state,
        acceptProposalLoading: true,
      };
    case CONSTANTS.ACCEPT_PROPOSAL_SUCCESS:
      return {
        ...state,
        acceptProposalLoading: false,
      };
    case CONSTANTS.ACCEPT_PROPOSAL_ERROR:
      return {
        ...state,
        acceptProposalLoading: false,
      };

    case CONSTANTS.REJECT_PROPOSAL_REQUEST:
      return {
        ...state,
        rejectProposalLoading: true,
      };
    case CONSTANTS.REJECT_PROPOSAL_SUCCESS:
      return {
        ...state,
        rejectProposalLoading: false,
      };
    case CONSTANTS.REJECT_PROPOSAL_ERROR:
      return {
        ...state,
        rejectProposalLoading: false,
      };

    default:
      return state;
  }
};
