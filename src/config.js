export const baseUrl = 'https://api.otctrade.com';

const {
  REACT_APP_RECAPTCHA_PROD_KEY: RECAPTCHA_PROD_KEY,
  REACT_APP_RECAPTCHA_DEV_KEY: RECAPTCHA_DEV_KEY,
  REACT_APP_API_KEY: FIREBASE_API_KEY,
  REACT_APP_AUTH_DOMAIN: FIREBASE_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL: FIREBASE_DATABASE_URL,
  REACT_APP_PROJECT_ID: FIREBASE_PROJECT_ID,
} = process.env;

export const RECAPTCHA_KEY =
  process.env.NODE_ENV === 'production'
    ? RECAPTCHA_PROD_KEY
    : RECAPTCHA_DEV_KEY;

export const PAGE_LIMIT = 4;

export const MSG_COUNT_LIMIT = 10;

export const FIRST_MESSAGE_TEXT = {
  id: 'first',
  type: 'first_message',
  text:
    'This is the very beginning of your direct message history, happy chats',
};

export const FIREBASE_CONFIG = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
};

export const OFFER_STATUS_CLASS = {
  accepted: 'primary',
  rejected: 'warning',
  pending: 'dark',
};

export const PROPOSAL_STATUS_CLASS = {
  active: 'primary',
  rejected: 'warning',
  pending: 'dark',
};
