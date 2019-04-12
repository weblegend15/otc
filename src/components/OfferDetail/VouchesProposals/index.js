import PropTypes from 'prop-types';
import VouchesProposals from './VouchesProposals';

VouchesProposals.propTypes = {
  vouches: PropTypes.array,
  proposals: PropTypes.array,
};

VouchesProposals.defaultProps = {
  vouches: [],
  proposals: [],
};

export default VouchesProposals;
