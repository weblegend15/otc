import {
  GET_DATA,
  SET_DATA,
} from '../constants';

// Sagas
export const getData = () => ({
  type: GET_DATA,
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});