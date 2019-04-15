import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewVouchModal from './ViewVouchModal';

import {
  acceptVouchRequest,
  rejectVouchRequest,
} from '../../screens/app/MainArea/GroupContent/VouchesProposals/PeopleRequestVouch/redux/actions';

ViewVouchModal.propTypes = {
  acceptVouchRequest: PropTypes.func.isRequired,
  rejectVouchRequest: PropTypes.func.isRequired,
  acceptVouchLoading: PropTypes.bool.isRequired,
  rejectVouchLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  acceptVouchLoading: state.app.groupVouches.acceptVouchLoading,
  rejectVouchLoading: state.app.groupVouches.rejectVouchLoading,
});

const mapDispatchToProps = {
  acceptVouchRequest,
  rejectVouchRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewVouchModal);
