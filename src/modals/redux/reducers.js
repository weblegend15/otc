import TOGGLE_MODAL from './constants';

const initialState = {
  show: false,
  modalType: null,
  modalData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        show: !state.show,
        modalType: action.payload.modalType,
        modalData: action.payload.modalData,
      };

    default:
      return state;
  }
};
