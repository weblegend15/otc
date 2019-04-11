import * as CONSTANTS from './constants';

// list proposals of the offer
export const getProposalsRequest = data => ({
  type: CONSTANTS.GET_PROPOSALS_REQUEST,
  payload: data,
});
export const getProposalsSuccess = data => ({
  type: CONSTANTS.GET_PROPOSALS_SUCCESS,
  payload: data,
});
export const getProposalsError = () => ({
  type: CONSTANTS.GET_PROPOSALS_ERROR,
});

// create proposal
export const createProposalRequest = data => ({
  type: CONSTANTS.CREATE_PROPOSAL_REQUEST,
  payload: data,
});
export const createProposalSuccess = data => ({
  type: CONSTANTS.CREATE_PROPOSAL_SUCCESS,
  payload: data,
});
export const createProposalError = () => ({
  type: CONSTANTS.CREATE_PROPOSAL_ERROR,
});

// delete proposal
export const deleteProposalRequest = data => ({
  type: CONSTANTS.DELETE_PROPOSAL_REQUEST,
  payload: data,
});
export const deleteProposalSuccess = data => ({
  type: CONSTANTS.DELETE_PROPOSAL_SUCCESS,
  payload: data,
});
export const deleteProposalError = () => ({
  type: CONSTANTS.DELETE_PROPOSAL_ERROR,
});

// update proposal
export const updateProposalRequest = data => ({
  type: CONSTANTS.UPDATE_PROPOSAL_REQUEST,
  payload: data,
});
export const updateProposalSuccess = data => ({
  type: CONSTANTS.UPDATE_PROPOSAL_SUCCESS,
  payload: data,
});
export const updateProposalError = () => ({
  type: CONSTANTS.UPDATE_PROPOSAL_ERROR,
});

// accept proposal
export const acceptProposalRequest = data => ({
  type: CONSTANTS.ACCEPT_PROPOSAL_REQUEST,
  payload: data,
});
export const acceptProposalSuccess = data => ({
  type: CONSTANTS.ACCEPT_PROPOSAL_SUCCESS,
  payload: data,
});
export const acceptProposalError = () => ({
  type: CONSTANTS.ACCEPT_PROPOSAL_ERROR,
});

// reject proposal
export const rejectProposalRequest = data => ({
  type: CONSTANTS.REJECT_PROPOSAL_REQUEST,
  payload: data,
});
export const rejectProposalSuccess = data => ({
  type: CONSTANTS.REJECT_PROPOSAL_SUCCESS,
  payload: data,
});
export const rejectProposalError = () => ({
  type: CONSTANTS.REJECT_PROPOSAL_ERROR,
});
