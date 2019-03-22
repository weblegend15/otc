import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
} from './constants';

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
