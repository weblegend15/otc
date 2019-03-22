import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
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
        currentUser: {
          value: null,
          loading: false,
        },
      };

    default:
      return state;
  }
};
