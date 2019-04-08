import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewOfferModal from './NewOfferModal';

import { createOfferRequest } from '../../screens/app/MainArea/GroupContent/redux/actions';

NewOfferModal.propTypes = {
  createOfferRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createOfferRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewOfferModal);
