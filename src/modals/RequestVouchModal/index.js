import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RequestVouchModal from './RequestVouchModal';
import './RequestVouchModal.scss';
import getActiveMembers from '../../selectors/getActiveMembers';

import {
  createVouchRequest,
  getVouchesRequest,
} from '../../screens/app/MainArea/GroupContent/Vouches/redux/actions';

RequestVouchModal.propTypes = {
  createVouchRequest: PropTypes.func.isRequired,
  activeMembers: PropTypes.object.isRequired,
  getVouchesRequest: PropTypes.func.isRequired,
  vouches: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  activeMembers: getActiveMembers(state),
  vouch: state.app.vouch.vouch,
  vouches: state.app.vouch.vouches,
  modalData: state.modal.modalData,
});

const mapDispatchToProps = {
  createVouchRequest,
  getVouchesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestVouchModal);
