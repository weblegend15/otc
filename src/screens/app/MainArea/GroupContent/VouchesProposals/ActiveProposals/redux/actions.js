import * as CONSTANTS from './constants';

export const getMyProposalsRequest = data => ({
  type: CONSTANTS.GET_MY_PROPOSALS_REQUEST,
  payload: data,
});
export const getMyProposalsSuccess = data => ({
  type: CONSTANTS.GET_MY_PROPOSALS_SUCCESS,
  payload: data,
});
export const getMyProposalsError = () => ({
  type: CONSTANTS.GET_MY_PROPOSALS_ERROR,
});
