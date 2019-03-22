import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
