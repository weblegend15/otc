import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNIN_REQUEST,
} from './constants';

const initialState = {
  currentUser: {
    value: null,
    loading: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: true,
        },
      };

    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        currentUser: {
          value: action.payload.user,
          loading: false,
        },
      };

    case SIGNIN_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          loading: false,
        },
      };

    case SIGNOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
};