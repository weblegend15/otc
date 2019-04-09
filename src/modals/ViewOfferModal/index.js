import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewOfferModal from './ViewOfferModal';

import {
  createProposalRequest,
  getProposalsRequest,
} from '../../screens/app/MainArea/GroupContent/Proposals/redux/actions';

ViewOfferModal.propTypes = {
  data: PropTypes.object.isRequired,
  createProposalRequest: PropTypes.func.isRequired,
  getProposalsRequest: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  proposals: PropTypes.object,
};

ViewOfferModal.defaultProps = {
  proposals: {},
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  createProposalRequest,
  getProposalsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewOfferModal);
