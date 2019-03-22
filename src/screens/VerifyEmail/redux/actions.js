import {
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
} from './constants';

// email verifyEmail
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
