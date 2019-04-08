import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewOfferModal from './ViewOfferModal';

ViewOfferModal.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps,
)(ViewOfferModal);
