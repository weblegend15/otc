import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewOfferModal from './ViewOfferModal';

import {
  createProposalRequest,
  getProposalsRequest,
} from '../../screens/app/MainArea/GroupContent/Proposals/redux/actions';

import { getVouchesRequest } from '../../screens/app/MainArea/GroupContent/Vouches/redux/actions';

ViewOfferModal.propTypes = {
  data: PropTypes.object.isRequired,
  createProposalRequest: PropTypes.func.isRequired,
  getProposalsRequest: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  proposals: PropTypes.object,
  getVouchesRequest: PropTypes.func.isRequired,
  groupMembers: PropTypes.array.isRequired,
};

ViewOfferModal.defaultProps = {
  proposals: {},
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
  vouches: state.app.vouch.vouches,
  currentUser: state.auth.currentUser,
  groupMembers: state.app.main.members.list,
});

const mapDispatchToProps = {
  createProposalRequest,
  getProposalsRequest,
  getVouchesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewOfferModal);
