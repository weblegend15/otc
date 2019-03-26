import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from './constants';

const initialState = {
  groupsList: {},
  groupsListLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS_REQUEST:
      return {
        ...state,
        groupsListLoading: true,
      };
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        groupsList: action.payload,
        groupsListLoading: false,
      };
    case GET_GROUPS_ERROR:
      return {
        ...state,
        groupsList: {},
        groupsListLoading: false,
      };

    default:
      return state;
  }
};
