import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActiveDeals from './ActiveDeals';

import { getProposalsRequest } from '../../Proposals/redux/actions';

ActiveDeals.propTypes = {
  getProposalsRequest: PropTypes.func.isRequired,
  proposals: PropTypes.object.isRequired,
  groupId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  proposals: state.app.proposal.proposals,
  groupId: state.app.main.selectedGroupId,
});

const mapDispatchToProps = {
  getProposalsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveDeals);
