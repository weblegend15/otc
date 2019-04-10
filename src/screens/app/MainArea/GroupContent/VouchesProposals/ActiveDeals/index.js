import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActiveDeals from './ActiveDeals';

import {
  getActiveGroupOffers,
  getMyActiveGroups,
} from '../../../../../../selectors';

import { getOffersRequest } from '../../redux/actions';
import toggleModal from '../../../../../../modals/redux/actions';

ActiveDeals.propTypes = {
  selectedGroupId: PropTypes.string.isRequired,
  getOffersRequest: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  activeGroupOffers: PropTypes.object.isRequired,
  myActiveGroups: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  selectedGroupId: state.app.main.selectedGroupId,
  myActiveGroups: getMyActiveGroups(state),
  activeGroupOffers: getActiveGroupOffers(state),
});

const mapDispatchToProps = {
  getOffersRequest,
  toggleModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveDeals);
