import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from './constants';

// get groups list actions
export const getGroupsRequest = data => ({
  type: GET_GROUPS_REQUEST,
  payload: data,
});

export const getGroupsSuccess = data => ({
  type: GET_GROUPS_SUCCESS,
  payload: data,
});

export const getGroupsError = () => ({
  type: GET_GROUPS_ERROR,
});
