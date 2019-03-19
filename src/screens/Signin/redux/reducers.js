import {
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from './constants';

const initialState = {
  authenticated: false,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        userData: action.payload,
      };

    case SIGNIN_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
      };

    case SIGNOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        userData: {},
        authenticated: false,
      };

    default:
      return state;
  }
};