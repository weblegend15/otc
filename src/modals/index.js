import React from 'react';
import { connect } from 'react-redux';

import NewGroupModal from './NewGroupModal';
import JoinGroupModal from './JoinGroupModal';

import toggleModal from './redux/actions';
import DeleteGroupModal from './DeleteGroupModal';
import ApproveGroupModal from './ApproveGroupModal';
import NewOfferModal from './NewOfferModal';
import ViewOfferModal from './ViewOfferModal';
import ViewApplicationModal from './ViewApplicationModal';
import EditGroupModal from './EditGroupModal';
import ManageUserModal from './ManageUserModal';
import RequestVouchModal from './RequestVouchModal';
import ViewProposalsModal from './ViewProposalsModal';
import LeaveFeedbackModal from './LeaveFeedbackModal';
import ViewVouchModal from './ViewVouchModal';

const Modals = {
  newGroupModal: NewGroupModal,
  joinGroupModal: JoinGroupModal,
  deleteGroupModal: DeleteGroupModal,
  approveGroupModal: ApproveGroupModal,
  newOfferModal: NewOfferModal,
  viewOfferModal: ViewOfferModal,
  viewApplicationModal: ViewApplicationModal,
  editGroupModal: EditGroupModal,
  manageUserModal: ManageUserModal,
  requestVouchModal: RequestVouchModal,
  viewProposalsModal: ViewProposalsModal,
  leaveFeedbackModal: LeaveFeedbackModal,
  viewVouchModal: ViewVouchModal,
};

const ModalContainer = ({ type, ...rest }) => {
  const ModalToRender = Modals[type];

  if (!ModalToRender) {
    // handle no modal found
    return null;
  }

  return <ModalToRender {...rest} />;
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
