import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
  SEND_CONFIRM_REQUEST,
  SEND_CONFIRM_SUCCESS,
  SEND_CONFIRM_ERROR,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
} from './constants';

// sing up actions
export const signupRequest = data => ({
  type: SIGNUP_REQUEST,
  data,
});

export const signupSuccess = data => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signupError = () => ({
  type: SIGNUP_ERROR,
});

// sign in actions
export const signinRequest = (email, password) => ({
  type: SIGNIN_REQUEST,
  email,
  password,
});

export const signinSuccess = data => ({
  type: SIGNIN_SUCCESS,
  payload: data,
});

export const signinError = () => ({
  type: SIGNIN_ERROR,
});

export const signout = () => ({
  type: SIGNOUT,
});

// send confirm actions
export const sendConfirmRequest = email => ({
  type: SEND_CONFIRM_REQUEST,
  payload: email,
});

export const sendConfirmSuccess = data => ({
  type: SEND_CONFIRM_SUCCESS,
  payload: data,
});

export const sendConfirmError = () => ({
  type: SEND_CONFIRM_ERROR,
});

// verify email actions
export const verifyEmailRequest = token => ({
  type: VERIFY_EMAIL_REQUEST,
  payload: token,
});

export const verifyEmailSuccess = data => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload: data,
});

export const verifyEmailError = () => ({
  type: VERIFY_EMAIL_ERROR,
});
