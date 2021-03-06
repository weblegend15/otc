import * as CONSTANTS from './constants';

const initialState = {
  currentUser: null,
  currentUserLoading: false,
  loading: false,
  verifyState: '',
  sendConfirmState: '',
  email: '',
  firebaseToken: '',
  token: '',
  forgotPassword: {
    step: 1,
    email: '',
    state: false,
  },
  error: '',

  twoFAData: {
    loading: false,
    data: {},
  },

  isConfirmTwoFA: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CONSTANTS.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CONSTANTS.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
      };

    case CONSTANTS.SIGNIN_REQUEST:
      return {
        ...state,
        currentUserLoading: true,
      };

    case CONSTANTS.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
        firebaseToken: action.payload.firebaseToken,
        currentUserLoading: false,
      };

    case CONSTANTS.SIGNIN_ERROR:
      return {
        ...state,
        currentUserLoading: false,
      };

    case CONSTANTS.SIGNOUT:
      return {
        ...state,
        currentUser: null,
        currentUserLoading: false,
      };

    case CONSTANTS.SEND_CONFIRM_REQUEST:
      return {
        ...state,
        sendConfirmState: 'pending',
        email: action.payload,
      };

    case CONSTANTS.SEND_CONFIRM_SUCCESS:
      return {
        ...state,
        sendConfirmState: 'sent',
      };

    case CONSTANTS.SEND_CONFIRM_ERROR:
      return {
        ...state,
        sendConfirmState: 'error',
        email: '',
      };

    case CONSTANTS.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        verifyState: 'pending',
      };

    case CONSTANTS.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        verifyState: 'confirmed',
      };

    case CONSTANTS.VERIFY_EMAIL_ERROR:
      return {
        ...state,
        verifyState: 'error',
      };
    case CONSTANTS.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
        },
        error: '',
      };
    case CONSTANTS.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          step: 2,
          email: action.payload,
          state: true,
        },
      };
    case CONSTANTS.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CONSTANTS.RESET_FORGOT_PASSWORD_STEP:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          step: action.step,
          state: false,
        },
      };
    case CONSTANTS.CONFIRM_PASSWORD_REQUEST:
      return {
        ...state,
        error: '',
      };
    case CONSTANTS.CONFIRM_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CONSTANTS.GENERATE_TWO_FA_REQUEST:
      return {
        ...state,
        twoFAData: {
          ...state.twoFAData,
          loading: true,
        },
      };
    case CONSTANTS.GENERATE_TWO_FA_SUCCESS:
      return {
        ...state,
        twoFAData: {
          ...state.twoFAData,
          data: action.payload,
          loading: false,
        },
      };
    case CONSTANTS.GENERATE_TWO_FA_ERROR:
      return {
        ...state,
        twoFAData: {
          ...state.twoFAData,
          data: {},
          loading: false,
        },
      };

    case CONSTANTS.CONFIRM_TWO_FA_REQUEST:
      return {
        ...state,
        isConfirmTwoFA: true,
      };
    case CONSTANTS.CONFIRM_TWO_FA_SUCCESS:
      return {
        ...state,
        isConfirmTwoFA: false,
        currentUser: {
          ...state.currentUser,
          is2faEnabled: true,
        },
      };
    case CONSTANTS.CONFIRM_TWO_FA_ERROR:
      return {
        ...state,
        isConfirmTwoFA: false,
      };

    case CONSTANTS.DISABLE_TWO_FA_REQUEST:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          is2faEnabled: false,
        },
      };
    default:
      return state;
  }
};
