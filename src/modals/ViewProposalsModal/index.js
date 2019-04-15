import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewProposalsModal from './ViewProposalsModal';
import './ViewProposalsModal.scss';

import {
  acceptProposalRequest,
  rejectProposalRequest,
  getProposalsRequest,
} from '../../screens/app/MainArea/GroupContent/Proposals/redux/actions';

ViewProposalsModal.propTypes = {
  acceptProposalRequest: PropTypes.func.isRequired,
  rejectProposalRequest: PropTypes.func.isRequired,
  getProposalsRequest: PropTypes.func.isRequired,
  acceptProposalLoading: PropTypes.bool.isRequired,
  rejectProposalLoading: PropTypes.bool.isRequired,
  modalData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
  modalData: state.modal.modalData,
  acceptProposalLoading: state.app.proposal.acceptProposalLoading,
  rejectProposalLoading: state.app.proposal.rejectProposalLoading,
});

const mapDispatchToProps = {
  acceptProposalRequest,
  rejectProposalRequest,
  getProposalsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewProposalsModal);
