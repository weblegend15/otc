import { put, takeLatest, call } from 'redux-saga/effects';
import * as CONSTANTS from './constants';

import {
  getProposalsSuccess,
  getProposalsError,
  createProposalSuccess,
  createProposalError,
  updateProposalSuccess,
  updateProposalError,
  deleteProposalSuccess,
  deleteProposalError,
  acceptProposalSuccess,
  acceptProposalError,
  rejectProposalSuccess,
  rejectProposalError,
} from './actions';

import toggleModal from '../../../../../../modals/redux/actions';

import request from '../../../../../../utils/apiRequest';
import notify from '../../../../../../utils/notify';

function* getProposals(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const requestData = {
      limit: action.payload.limit,
      skip: action.payload.skip,
    };
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals`,
      'GET',
      requestData,
      true,
    );

    yield put(getProposalsSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(getProposalsError());
  }
}

function* createProposal(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const requestData = action.payload.proposalData;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals`,
      'POST',
      requestData,
      true,
    );

    yield put(createProposalSuccess(data));
    yield put(toggleModal('viewOfferModal'));
    notify('success', 'Proposal sent!');
  } catch (err) {
    notify('error', err.message);
    yield put(createProposalError());
  }
}

function* updateProposal(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { proposalId } = action.payload;
    const requestData = action.payload.proposalData;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals/${proposalId}`,
      'PUT',
      requestData,
      true,
    );

    yield put(updateProposalSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(updateProposalError());
  }
}

function* deleteProposal(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { proposalId } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals/${proposalId}`,
      'DELETE',
      null,
      true,
    );

    yield put(deleteProposalSuccess(data));
  } catch (err) {
    notify('error', err.message);
    yield put(deleteProposalError());
  }
}

function* acceptProposal(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { proposalId } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals/${proposalId}/accept`,
      'PUT',
      {},
      true,
    );

    yield put(acceptProposalSuccess(data));
    yield put(toggleModal('viewProposalsModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(acceptProposalError());
    yield put(toggleModal('viewProposalsModal'));
  }
}

function* rejectProposal(action) {
  try {
    const { groupId } = action.payload;
    const { offerId } = action.payload;
    const { proposalId } = action.payload;
    const data = yield call(
      request,
      `/groups/${groupId}/offers/${offerId}/proposals/${proposalId}/reject`,
      'PUT',
      {},
      true,
    );

    yield put(rejectProposalSuccess(data));
    yield put(toggleModal('viewProposalsModal'));
  } catch (err) {
    notify('error', err.message);
    yield put(rejectProposalError());
    yield put(toggleModal('viewProposalsModal'));
  }
}

export default function* proposalSaga() {
  yield takeLatest(CONSTANTS.GET_PROPOSALS_REQUEST, getProposals);
  yield takeLatest(CONSTANTS.CREATE_PROPOSAL_REQUEST, createProposal);
  yield takeLatest(CONSTANTS.UPDATE_PROPOSAL_REQUEST, updateProposal);
  yield takeLatest(CONSTANTS.DELETE_PROPOSAL_REQUEST, deleteProposal);
  yield takeLatest(CONSTANTS.ACCEPT_PROPOSAL_REQUEST, acceptProposal);
  yield takeLatest(CONSTANTS.REJECT_PROPOSAL_REQUEST, rejectProposal);
}
