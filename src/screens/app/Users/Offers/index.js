import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Offers from './Offers';

import { getMyOffersRequest } from '../redux/actions';
import { getPermissionGroupsRequest } from '../../MainArea/redux/actions';
import toggleModal from '../../../../modals/redux/actions';

Offers.propTypes = {
  getMyOffersRequest: PropTypes.func.isRequired,
  myOffers: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  getPermissionGroupsRequest: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  myOffers: state.app.user.myOffers,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  getMyOffersRequest,
  getPermissionGroupsRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers);
