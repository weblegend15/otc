export const baseUrl = 'https://api.otctrade.com';

const {
  REACT_APP_RECAPTCHA_PROD_KEY: RECAPTCHA_PROD_KEY,
  REACT_APP_RECAPTCHA_DEV_KEY: RECAPTCHA_DEV_KEY,
} = process.env;

export const RECAPTCHA_KEY =
  process.env.NODE_ENV === 'production'
    ? RECAPTCHA_PROD_KEY
    : RECAPTCHA_DEV_KEY;

export const PAGE_LIMIT = 4;
