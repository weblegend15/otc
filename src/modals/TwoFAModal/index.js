import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TwoFAModal from './TwoFAModal';

import toggleModal from '../redux/actions';

TwoFAModal.propTypes = {
  modalData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  modalData: state.modal.modalData,
});

const mapDispatchToProps = {
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TwoFAModal);
