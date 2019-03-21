import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

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
