import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActiveProposals from './ActiveProposals';
import './ActiveProposals.scss';

import { getActiveMembers } from '../../../../../../selectors';
import toggleModal from '../../../../../../modals/redux/actions';
import { getMyProposalsRequest } from './redux/actions';

ActiveProposals.propTypes = {
  getMyProposalsRequest: PropTypes.func.isRequired,
  groupProposals: PropTypes.object.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  activeMembers: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  groupProposals: state.app.groupProposals.myProposals,
  selectedGroupId: state.app.main.selectedGroupId,
  activeMembers: getActiveMembers(state),
});

const mapDispatchToProps = {
  getMyProposalsRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveProposals);
