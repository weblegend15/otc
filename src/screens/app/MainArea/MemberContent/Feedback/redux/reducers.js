import * as CONSTANTS from './constants';

const initialState = {
  feedbackList: {
    loading: false,
    list: [],
    total: 0,
  },

  feedback: {
    loading: false,
    data: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_FEEDBACK_LIST_REQUEST:
      return {
        ...state,
        feedbackList: {
          ...state.feedbackList,
          loading: true,
        },
      };
    case CONSTANTS.GET_FEEDBACK_LIST_SUCCESS:
      return {
        ...state,
        feedbackList: {
          ...state.feedbackList,
          list: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case CONSTANTS.GET_FEEDBACK_LIST_ERROR:
      return {
        ...state,
        feedbackList: {
          ...state.feedbackList,
          loading: false,
        },
      };

    case CONSTANTS.LEAVE_FEEDBACK_REQUEST:
      return {
        ...state,
        feedback: {
          ...state.feedback,
          loading: true,
        },
      };
    case CONSTANTS.LEAVE_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: {
          ...state.feedback,
          data: action.payload.data,
          loading: false,
        },
      };
    case CONSTANTS.LEAVE_FEEDBACK_ERROR:
      return {
        ...state,
        feedback: {
          ...state.feedback,
          loading: false,
        },
      };

    default:
      return state;
  }
};
