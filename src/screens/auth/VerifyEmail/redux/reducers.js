import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
} from './constants';

const initialState = {
  verifyState: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        verifyState: 'pending',
      };

    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        verifyState: 'confirmed',
      };

    case VERIFY_EMAIL_ERROR:
      return {
        ...state,
        verifyState: 'error',
      };

    default:
      return state;
  }
};
