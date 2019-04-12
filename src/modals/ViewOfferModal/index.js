import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewOfferModal from './ViewOfferModal';

import {
  createProposalRequest,
  getProposalsRequest,
} from '../../screens/app/MainArea/GroupContent/Proposals/redux/actions';

import { getGroupMembersRequest } from '../../screens/app/MainArea/redux/actions';
import { getVouchesRequest } from '../../screens/app/MainArea/GroupContent/Vouches/redux/actions';
import {
  deleteOfferRequest,
  endOfferRequest,
} from '../../screens/app/MainArea/GroupContent/redux/actions';

ViewOfferModal.propTypes = {
  data: PropTypes.object.isRequired,
  createProposalRequest: PropTypes.func.isRequired,
  getProposalsRequest: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  proposals: PropTypes.object,
  getVouchesRequest: PropTypes.func.isRequired,
  groupMembers: PropTypes.array.isRequired,
  getGroupMembersRequest: PropTypes.func.isRequired,
  deleteOfferRequest: PropTypes.func.isRequired,
  endOfferRequest: PropTypes.func.isRequired,
};

ViewOfferModal.defaultProps = {
  proposals: {},
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
  vouches: state.app.vouch.vouches,
  currentUser: state.auth.currentUser,
  groupMembers: state.app.main.members.list,
  groupOffer: state.app.offer.groupOffer,
});

const mapDispatchToProps = {
  createProposalRequest,
  getProposalsRequest,
  getVouchesRequest,
  getGroupMembersRequest,
  deleteOfferRequest,
  endOfferRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewOfferModal);
