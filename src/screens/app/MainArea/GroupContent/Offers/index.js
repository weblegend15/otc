import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Offers from './Offers';
import { getOffersRequest } from '../redux/actions';
import toggleModal from '../../../../../modals/redux/actions';

Offers.propTypes = {
  getOffersRequest: PropTypes.func.isRequired,
  selectedGroupId: PropTypes.string.isRequired,
  groupOffers: PropTypes.object.isRequired,
  groupMembers: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  groupOffers: state.app.offer.groupOffers,
  groupMembers: state.app.main.members,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  getOffersRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers);
