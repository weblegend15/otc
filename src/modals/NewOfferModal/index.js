import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewOfferModal from './NewOfferModal';

import toggleModal from '../redux/actions';
import { createOfferRequest } from '../../screens/app/MainArea/GroupContent/redux/actions';

NewOfferModal.propTypes = {
  createOfferRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createOfferRequest,
  toggleModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewOfferModal);
