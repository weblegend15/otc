import {
  SEND_CONFIRM_REQUEST,
  SEND_CONFIRM_SUCCESS,
  SEND_CONFIRM_ERROR,
} from './constants';

const initialState = {
  sendConfirmState: '',
  email: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_CONFIRM_REQUEST:
      return {
        ...state,
        sendConfirmState: 'pending',
        email: action.payload,
      };

    case SEND_CONFIRM_SUCCESS:
      return {
        ...state,
        sendConfirmState: 'sent',
      };

    case SEND_CONFIRM_ERROR:
      return {
        ...state,
        sendConfirmState: 'error',
        email: '',
      };

    default:
      return state;
  }
};
