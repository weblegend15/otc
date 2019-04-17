import * as CONSTANTS from './constants';

// sing up actions
export const signupRequest = data => ({
  type: CONSTANTS.SIGNUP_REQUEST,
  data,
});

export const signupSuccess = data => ({
  type: CONSTANTS.SIGNUP_SUCCESS,
  payload: data,
});

export const signupError = () => ({
  type: CONSTANTS.SIGNUP_ERROR,
});

// sign in actions
export const signinRequest = (email, password) => ({
  type: CONSTANTS.SIGNIN_REQUEST,
  email,
  password,
});

export const signinSuccess = data => ({
  type: CONSTANTS.SIGNIN_SUCCESS,
  payload: data,
});

export const signinError = () => ({
  type: CONSTANTS.SIGNIN_ERROR,
});

export const signout = () => ({
  type: CONSTANTS.SIGNOUT,
});

// send confirm actions
export const sendConfirmRequest = email => ({
  type: CONSTANTS.SEND_CONFIRM_REQUEST,
  payload: email,
});

export const sendConfirmSuccess = data => ({
  type: CONSTANTS.SEND_CONFIRM_SUCCESS,
  payload: data,
});

export const sendConfirmError = () => ({
  type: CONSTANTS.SEND_CONFIRM_ERROR,
});

// verify email actions
export const verifyEmailRequest = token => ({
  type: CONSTANTS.VERIFY_EMAIL_REQUEST,
  payload: token,
});

export const verifyEmailSuccess = data => ({
  type: CONSTANTS.VERIFY_EMAIL_SUCCESS,
  payload: data,
});

export const verifyEmailError = () => ({
  type: CONSTANTS.VERIFY_EMAIL_ERROR,
});

// reset password actions
export const forgotPasswordRequest = email => ({
  type: CONSTANTS.FORGOT_PASSWORD_REQUEST,
  email,
});

export const forgotPasswordSuccess = data => ({
  type: CONSTANTS.FORGOT_PASSWORD_SUCCESS,
  payload: data,
});

export const forgotPasswordError = error => ({
  type: CONSTANTS.FORGOT_PASSWORD_ERROR,
  error,
});

export const resetForgotPasswordStep = step => ({
  type: CONSTANTS.RESET_FORGOT_PASSWORD_STEP,
  step,
});

// confirm password actions
export const confirmPasswordRequest = (email, password, token) => ({
  type: CONSTANTS.CONFIRM_PASSWORD_REQUEST,
  email,
  password,
  token,
});

export const confirmPasswordError = error => ({
  type: CONSTANTS.CONFIRM_PASSWORD_ERROR,
  error,
});

// two factor authentication key generator
export const generateTwoFARequest = () => ({
  type: CONSTANTS.GENERATE_TWO_FA_REQUEST,
});
export const generateTwoFASuccess = data => ({
  type: CONSTANTS.GENERATE_TWO_FA_SUCCESS,
  payload: data,
});
export const generateTwoFAError = () => ({
  type: CONSTANTS.GENERATE_TWO_FA_ERROR,
});

// confirm two factor authentication key generator
export const confirmTwoFARequest = data => ({
  type: CONSTANTS.CONFIRM_TWO_FA_REQUEST,
  payload: data,
});
export const confirmTwoFASuccess = data => ({
  type: CONSTANTS.CONFIRM_TWO_FA_SUCCESS,
  payload: data,
});
export const confirmTwoFAError = () => ({
  type: CONSTANTS.CONFIRM_TWO_FA_ERROR,
});
