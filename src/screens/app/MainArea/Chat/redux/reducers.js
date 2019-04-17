import * as CONSTANTS from './constants';

const initialState = {
  messageList: {
    chats: [],
    loading: false,
  },
  newOffer: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_RESET_MESSAGES:
      return {
        ...state,
        messageList: {
          ...state.messageList,
          chats: [],
        },
      };

    case CONSTANTS.ADD_NEW_MESSAGE:
      return {
        ...state,
        messageList: {
          ...state.messageList,
          chats: [
            ...new Set(
              [...state.messageList.chats, ...action.payload].map(item =>
                JSON.stringify(item),
              ),
            ),
          ].map(item => JSON.parse(item)),
        },
      };

    case CONSTANTS.MESSAGE_STORE:
      return {
        ...state,
        messageList: {
          ...state.messageList,
          chats: action.payload,
          loading: false,
        },
      };

    case CONSTANTS.GET_MORE_MESSAGES:
      return {
        ...state,
        messageList: {
          ...state.messageList,
          chats: action.payload.concat(state.messageList.chats),
        },
      };
    case CONSTANTS.GET_NEW_OFFER:
      return {
        ...state,
        newOffer: action.payload,
      };
    default:
      return state;
  }
};
