import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VouchesProposals from './VouchesProposals';

import { getProposalsRequest } from '../Proposals/redux/actions';

VouchesProposals.propTypes = {
  getProposalsRequest: PropTypes.func.isRequired,
  proposals: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
});

const mapDispatchToProps = {
  getProposalsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VouchesProposals);
