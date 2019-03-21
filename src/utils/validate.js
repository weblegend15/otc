export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = value =>
  value && value.length < 6 ? 'Must be 6 characters or more' : undefined;

export const isNumber = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined; // eslint-disable-line

export const isEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const confirmation = (value, { stepOne: { password } }) => {
  return value && value !== password ? 'Password mismatched' : undefined;
};
