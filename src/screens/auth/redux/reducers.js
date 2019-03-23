import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  SEND_CONFIRM_REQUEST,
  SEND_CONFIRM_SUCCESS,
  SEND_CONFIRM_ERROR,
} from './constants';

const initialState = {
  currentUser: null,
  currentUserLoading: false,
  loading: false,
  verifyState: '',
  sendConfirmState: '',
  email: '',
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

    case SIGNIN_REQUEST:
      return {
        ...state,
        currentUserLoading: true,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        currentUserLoading: false,
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        currentUserLoading: false,
      };

    case SIGNOUT:
      return {
        ...state,
        currentUser: null,
        currentUserLoading: false,
      };

    case SEND_CONFIRM_REQUEST:
      return {
        ...state,
        sendConfirmState: 'pending',
        email: action.payload,
      };

    case SEND_CONFIRM_SUCCESS:
      return {
        ...state,
        sendConfirmState: 'sent',
      };

    case SEND_CONFIRM_ERROR:
      return {
        ...state,
        sendConfirmState: 'error',
        email: '',
      };

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
