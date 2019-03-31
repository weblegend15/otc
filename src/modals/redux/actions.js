import TOGGLE_MODAL from './constants';

const toggleModal = (modalType, modalData) => ({
  type: TOGGLE_MODAL,
  payload: modalType,
  modalData,
});

export default toggleModal;
