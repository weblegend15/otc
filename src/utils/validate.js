import _ from 'lodash';
import { getFormLabel } from './common';

export const required = (value, param1, param2, param3) =>
  value ? undefined : `${getFormLabel(param3)} is required`;

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = value =>
  value && value.length < 6
    ? 'Too short. Use at least 6 characters'
    : undefined;

export const isNumber = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined; // eslint-disable-line

export const isEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Please enter a valid email address'
    : undefined;

export const confirmation = (value, param1, param2, param3) => {
  const temp = param3.split('.');
  temp.pop();
  temp.push('password');
  return value && value !== _.get(param1, temp)
    ? 'You password and repeat password do not match'
    : undefined;
};

export const phoneRequire = value => {
  if (!value) {
    return undefined;
  }
  if (value.length === 1) {
    return 'Phone number is required';
  }

  if (value.length < 17) {
    return 'Phone number is too short';
  }
  return undefined;
};
