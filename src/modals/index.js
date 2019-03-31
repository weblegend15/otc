import React from 'react';
import { connect } from 'react-redux';

import NewGroupModal from './NewGroupModal';
import JoinGroupModal from './JoinGroupModal';

import toggleModal from './redux/actions';

const ModalContainer = ({ type, ...rest }) => {
  const modalObj = {
    newGroupModal: <NewGroupModal {...rest} />,
    joinGroupModal: <JoinGroupModal {...rest} />,
  };

  return !type ? null : modalObj[type];
};

const mapStateToProps = state => ({
  show: state.modal.show,
  type: state.modal.modalType,
  data: state.modal.modalData,
});

const mapDispatchToProps = {
  onHide: toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);
