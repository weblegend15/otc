import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OfferCard from './OfferCard';

import { getMyActiveGroups } from '../../../../../selectors';

import toggleModal from '../../../../../modals/redux/actions';

OfferCard.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  myActiveGroups: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myActiveGroups: getMyActiveGroups(state),
});

const mapDispatchToProps = {
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferCard);
