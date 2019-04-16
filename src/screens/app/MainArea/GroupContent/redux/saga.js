import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getOffersSuccess,
  getOffersError,
  readOfferSuccess,
  readOfferError,
  createOfferSuccess,
  createOfferError,
  updateOfferSuccess,
  updateOfferError,
  deleteOfferSuccess,
  deleteOfferError,
  endOfferSuccess,
  endOfferError,
} from './actions';

import { deleteMyOffer } from '../../../Users/redux/actions';
import toggleModal from '../../../../../modals/redux/actions';

import request from '../../../../../utils/apiRequest';
import notify from '../../../../../utils/notify';

function* getGroupOffers(action) {
  try {
    const { groupId } = action.payload;
    const requestData = {
      limit: action.payload.limit,
      skip: action.payload.skip,
      filters: action.payload.filters,
    };

    const data = yield call(
      request,
      `/groups/${groupId}/offers`,
      'GET',
      requestData,
      true,
    );

    yield put(getOffersSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(getOffersError());
  }
}

function* readGroupOffer(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}`,
      'GET',
      null,
      true,
    );

    yield put(readOfferSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(readOfferError());
  }
}

function* createGroupOffer(action) {
  try {
    const { groupId } = action.payload;
    const { twoFACode } = action.payload;
    const requestData = action.payload.offerData;
    const data = yield call(
      request,
      `/groups/${groupId}/offers`,
      'POST',
      requestData,
      true,
      twoFACode,
    );

    yield put(createOfferSuccess(data));
    yield put(toggleModal('twoFAModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(createOfferError());
  }
}

function* updateGroupOffer(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { twoFACode } = action.payload;
    const requestData = action.payload.offerData;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}`,
      'PUT',
      requestData,
      true,
      twoFACode,
    );

    yield put(updateOfferSuccess(data));
    yield put(toggleModal('twoFAModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(updateOfferError());
  }
}

function* deleteGroupOffer(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}`,
      'DELETE',
      null,
      true,
    );

    yield put(deleteOfferSuccess(data));
    yield put(deleteMyOffer(offerId));
    yield put(toggleModal('viewOfferModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(deleteOfferError());
    yield put(toggleModal('viewOfferModal'));
  }
}

function* endGroupOffer(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { twoFACode } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/end`,
      'PUT',
      {},
      true,
      twoFACode,
    );

    yield put(endOfferSuccess(data));
    yield put(toggleModal('twoFAModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(endOfferError());
  }
}

export default function* userSaga() {
  yield takeLatest(CONSTANTS.GET_OFFERS_REQUEST, getGroupOffers);
  yield takeLatest(CONSTANTS.READ_OFFER_REQUEST, readGroupOffer);
  yield takeLatest(CONSTANTS.CREATE_OFFER_REQUEST, createGroupOffer);
  yield takeLatest(CONSTANTS.UPDATE_OFFER_REQUEST, updateGroupOffer);
  yield takeLatest(CONSTANTS.DELETE_OFFER_REQUEST, deleteGroupOffer);
  yield takeLatest(CONSTANTS.END_OFFER_REQUEST, endGroupOffer);
}
