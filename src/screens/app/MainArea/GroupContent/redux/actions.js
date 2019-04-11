import * as CONSTANTS from './constants';

export const getOffersRequest = data => ({
  type: CONSTANTS.GET_OFFERS_REQUEST,
  payload: data,
});
export const getOffersSuccess = data => ({
  type: CONSTANTS.GET_OFFERS_SUCCESS,
  payload: data,
});
export const getOffersError = () => ({
  type: CONSTANTS.GET_OFFERS_ERROR,
});

export const createOfferRequest = data => ({
  type: CONSTANTS.CREATE_OFFER_REQUEST,
  payload: data,
});
export const createOfferSuccess = data => ({
  type: CONSTANTS.CREATE_OFFER_SUCCESS,
  payload: data,
});
export const createOfferError = () => ({
  type: CONSTANTS.CREATE_OFFER_ERROR,
});

export const readOfferRequest = data => ({
  type: CONSTANTS.READ_OFFER_REQUEST,
  payload: data,
});
export const readOfferSuccess = data => ({
  type: CONSTANTS.READ_OFFER_SUCCESS,
  payload: data,
});
export const readOfferError = () => ({
  type: CONSTANTS.READ_OFFER_ERROR,
});

export const updateOfferRequest = data => ({
  type: CONSTANTS.UPDATE_OFFER_REQUEST,
  payload: data,
});
export const updateOfferSuccess = data => ({
  type: CONSTANTS.UPDATE_OFFER_SUCCESS,
  payload: data,
});
export const updateOfferError = () => ({
  type: CONSTANTS.UPDATE_OFFER_ERROR,
});

export const deleteOfferRequest = data => ({
  type: CONSTANTS.DELETE_OFFER_REQUEST,
  payload: data,
});
export const deleteOfferSuccess = data => ({
  type: CONSTANTS.DELETE_OFFER_SUCCESS,
  payload: data,
});
export const deleteOfferError = () => ({
  type: CONSTANTS.DELETE_OFFER_ERROR,
});